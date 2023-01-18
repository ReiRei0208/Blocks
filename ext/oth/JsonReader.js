(function (Scratch) {
JSONT = ""
class JSONExt {
    getInfo() {
        return {
            id: 'readjsontiger',
            name: 'JSON reader',
            blocks: [
                {
                    opcode: 'website',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Blocks+ Website'
                },
                  
                      
                  "---",
            
                {
                    opcode: 'LoadJSON',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '读取 [jsontext]',
                    arguments: {
                        jsontext: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '{"text":"Hello"}'
                        }
                    }
                },
                {
                    opcode: 'ReadJSON',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '获取 JSON 中的值：[key]',
                    arguments: {
                        key: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "text"
                        }
                    }
                }
            ]
        };
    }
    LoadJSON(args) {
        JSONT = JSON.parse(args.jsontext);
    };
    ReadJSON(args) {
        return eval("JSONT." + args.key);
    }
    website() {
        return "https://blocksplus.netlify.app/"
    }
}
Scratch.extensions.register(new JSONExt());
})(Scratch);