import { render, fireEvent, screen } from "./test-utils";
import ScrollChat from "./index";
import { messages } from "../../state/demoData";

const { demoCustomer } = messages;

test("Renders First Message", () => {
  const { getByTestId } = render(<ScrollChat />);
  const element = getByTestId("message-chat-msg-1");

  expect(element).toBeOnTheScreen();

  //callstack.github.io/react-native-testing-library/docs/jest-matchers#tohavetextcontent
  //expect(element).toHaveTextContent("1-help");
  https: expect(element).toHaveTextContent(`1-${demoCustomer[1].utterance}`);
});
