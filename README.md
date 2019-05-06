# Java `.properties` file to `.po` converter
## Description

Takes a Java `.properties` file where the keys are the `msgid` and the values are the `msgstr`.

For simplicity, the tool reads the `./input.properties`, converts it and saves the result into `./output.po`.

## Example

### `input.properties`
```properties
# Comment goes here.
My name is %s.=Je m'appelle %s.
Hello!=Salut!
```


### `output.po`
```pot
msgid ""
msgstr ""

msgid "My name is %s."
msgstr "Je m'appelle %s."

msgid "Hello!"
msgstr "Salut!"
```