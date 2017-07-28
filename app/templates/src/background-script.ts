const testMessage: string = "Hello World!";
browser.browserAction.onClicked.addListener(
    () => console.log(testMessage),
);
