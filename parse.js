const properties = require("properties");
const PO = require("pofile");

const output = new PO();

properties.parse("input.properties", {
    path: true
}, (_, properties) => {    
    const keys = Object.keys(properties);

    for (let key of keys) {
        const message = new PO.Item();
        message.msgid = key;
        message.msgstr = properties[key];
        
        output.items.push(message);
    }

    output.save("output.po");
});