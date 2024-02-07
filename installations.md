- https://callstack.github.io/react-native-testing-library/docs/getting-started
- https://docs.expo.dev/get-started/create-a-project/
- https://dev.to/steveruizok/jest-and-esm-cannot-use-import-statement-outside-a-module-4mmj
- https://docs.expo.dev/develop/unit-testing/

Steps:
1. `npx create-expo-app operator-client-native-poc`
2. `cd operator-client-native-poc`
3. `npx expo install react-native-web react-dom @expo/metro-runtime`
4. `npm install --save-dev @testing-library/jest-native @testing-library/react-native babel-jest  jest-expo`
5. Added setup-jest.js
```
import '@testing-library/react-native/extend-expect';
```
6. Added jest config to package.json
```JSON
{
    "jest": {
    "preset": "jest-expo",
    "transformIgnorePatterns": [
      "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|react-redux)"
    ],
    "transform": {
      "^.+\\.(js|jsx|ts|tsx|mjs)$": "babel-jest"
    },
    "setupFilesAfterEnv": [
      "./setup-jest.js"
    ]
  }
}
```
7. `npm install @reduxjs/toolkit react-redux`
8. Added React Native components
9. Added test files

---
# Steps to Create .p12 file

## Step 1: Creating private keys and certificates

Last Updated: 2024-01-10
https://www.ibm.com/docs/en/license-metric-tool?topic=certificate-step-1-creating-private-keys-certificates

To improve security, create your own private key and a certificate instead of using the self-signed ones that are available in License Metric Tool by default. You can use OpenSSL to create a private key and a certificate signing request (CSR) that can be transformed into a certificate after it is signed by a certificate authority (CA).
About this task
This procedure is valid for all operating systems that are supported by OpenSSL.
Procedure
1. Open the command line.
2. Create a new private key in the PKCS#1 format.

    ```
    openssl genrsa -des3 -out key_name.key key_strength
    ```

    For example:
    ```
    openssl genrsa -des3 -out private_key.key 2048
    ```

3. Create a certificate signing request (CSR). The request is associated with your private key and is later transformed into a certificate.
    ```
    openssl req -new -key path_to_private_key.key -out csr_name.csr
    ```
    For example:
    ```
    openssl req -new -key private_key.key -out CSR.csr
    ```
    - will ask some questions
    ```
    j:~$ openssl req -new -key private_key.key -out CSR.csr
    Enter pass phrase for private_key.key:
    You are about to be asked to enter information that will be incorporated
    into your certificate request.
    What you are about to enter is what is called a Distinguished Name or a DN.
    There are quite a few fields but you can leave some blank
    For some fields there will be a default value,
    If you enter '.', the field will be left blank.
    -----
    Country Name (2 letter code) [AU]:
    State or Province Name (full name) [Some-State]:
    Locality Name (eg, city) []:
    Organization Name (eg, company) [Internet Widgits Pty Ltd]:
    Organizational Unit Name (eg, section) []:
    Common Name (e.g. server FQDN or YOUR name) []:
    Email Address []:

    Please enter the following 'extra' attributes
    to be sent with your certificate request
    A challenge password []:
    An optional company name []:

    ```
### Results
- Two files are created: your private key (.key) and the certificate signing request (.csr).
- What to do next
    - Sign the request to transform it into the certificate.
    - https://www.ibm.com/docs/en/license-metric-tool?topic=certificate-step-2-signing-certificates

---

## Step 2: Signing certificates

https://www.ibm.com/docs/en/license-metric-tool?topic=certificate-step-2-signing-certificates

Last Updated: 2024-01-10

After you create a certificate signing request (CSR), it must be signed by a certificate authority (CA) to be transformed into a certificate that can be uploaded to License Metric Tool. You can use the OpenSSL cryptographic library to create a private CA and sign your request.

### Before you begin

Using a private CA to sign your request is not the only way. You can also send the request to internationally trusted CAs, such as Entrust, VeriSign, and so on, or use the CA of your organization. The certificates of these CAs are often trusted by default and do not display any warnings in the browser. Warnings might be displayed if you use a private CA.

### Procedure
- Create a private certificate authority (CA) and a certificate for it.
- Create a private CA. This step creates a private key (.key) and a request (.csr) similar to those that you created in Creating private keys and certificates.

    ```
    openssl req -new -newkey rsa:key_strength -nodes -out CA_csr_name.csr -keyout CA_key_name.key -sha256
    ```
    
- For example:

    ```
    openssl req -new -newkey rsa:2048 -nodes -out CA_CSR.csr -keyout CA_private_key.key -sha256
    ```
- will ask some questions
    ```
    You are about to be asked to enter information that will be incorporated
    into your certificate request.
    What you are about to enter is what is called a Distinguished Name or a DN.
    There are quite a few fields but you can leave some blank
    For some fields there will be a default value,
    If you enter '.', the field will be left blank.
    -----
    Country Name (2 letter code) [AU]:
    State or Province Name (full name) [Some-State]:
    Locality Name (eg, city) []:
    Organization Name (eg, company) [Internet Widgits Pty Ltd]:
    Organizational Unit Name (eg, section) []:
    Common Name (e.g. server FQDN or YOUR name) []:
    Email Address []:

    Please enter the following 'extra' attributes
    to be sent with your certificate request
    A challenge password []:
    An optional company name []:
    ```
- Create a certificate for your private CA. This step creates a certificate (.arm) that you can use to sign your CSR.
    ```
    openssl x509 -signkey path_to_CA_key.key -days number_of_days -req -in path_to_CA_csr.csr -out CA_certificate_name.arm -sha256
    ```


    - For example:
    ```
    openssl x509 -signkey CA_private_key.key -days 90 -req -in CA_CSR.csr -out CA_certificate.arm -sha256
    ```

- Use the CA certificate to sign the certificate signing request that you created in Creating private keys and certificates.
    ```
    openssl x509 -req -days number_of_days -in path_to_csr.csr -CA path_to_CA_certificate.arm -CAkey path_to_CA_key.key -out new_certificate.arm -set_serial 01 -sha256
    ```
    For example:
    ```
    openssl x509 -req -days 90 -in CSR.csr -CA CA_certificate.arm -CAkey CA_private_key.key -out certificate.pem -set_serial 01 -sha256
    ```

### Finally

- Create .p12 file
```
openssl pkcs12 -export -in certificate.pem -inkey private_key.key -name operator-client -out keystore.p12
```
---