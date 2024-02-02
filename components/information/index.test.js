import { render,  screen } from '@testing-library/react-native';

//import {render, screen, fireEvent} from '@testing-library/react-native'
import Information from "./index";


test("Render Information component" ,()=> {
    const {getByTestId} = render(<Information information="hello World!" />);
    const element = screen.getByTestId('information-text');
        
    //https://callstack.github.io/react-native-testing-library/docs/jest-matchers#tobeonthescreen
    expect(element).toBeOnTheScreen();

    https://callstack.github.io/react-native-testing-library/docs/jest-matchers#tohavetextcontent
    expect(element).toHaveTextContent("hello World!");
    
})