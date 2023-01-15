(function(Scratch) {
    'use strict';
    class StrictEqualityExtension {
      getInfo() {
        return {
            id: 'texttool', 
            name: '文本工具',
            color1: '#29beb8',
      color2: '#308986',
      color3: '#308986',
      blockIconURI: "data:image/png;base64,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",
            blocks: [
  
              {
                opcode: 'website',
                blockType: Scratch.BlockType.REPORTER,
                text: 'Blocks+ Website'
              },
              
                  
              "---",
        
              {
                opcode: "repeat",
                blockType: Scratch.BlockType.REPORTER,
                text: "将 [STRING] 重复 [REPEAT] 遍",
                arguments: {
                  STRING: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: "blocks "
                  },
                  REPEAT: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 3
                  }
                }
              },{
                opcode: "indexof",
                blockType: Scratch.BlockType.REPORTER,
                text: "第一个 [SUBSTRING] 在 [STRING] 的位置",
                arguments: {
                  SUBSTRING: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: "b"
                  },
                  STRING: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: "blocks"
                  }
                }
              },{
                opcode: 'maketext',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '通过 [list] 随机生成 [length] 个字符',
                    arguments: {
                      list: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 'blocks'
                      },
                      length: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: '3'
                      }
                    }
                  },{
                opcode: "change",
                blockType: Scratch.BlockType.REPORTER,
                text: "将 [STRING] 中的 [SUBSTRING] 替换为 [REPLACE]",
                arguments: {
                  SUBSTRING: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: "World"
                  },
                  STRING: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: "Hello World!"
                  },
                  REPLACE: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: "Blocks+"
                  }
                }
              },{
                opcode: "count",
                blockType: Scratch.BlockType.REPORTER,
                text: "[SUBSTRING] 在 [STRING] 的个数",
                arguments: {
                  SUBSTRING: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: "c"
                  },
                  STRING: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: "Blocks+ Extension Gallery"
                  }
                }
              },{
                opcode: "letters_of",
                blockType: Scratch.BlockType.REPORTER,
                text: "取字符串 [STRING] 中的第 [LETTER1] 个到第 [LETTER2] 个字符",
                arguments: {
                  LETTER1: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 1
                  },
                  LETTER2: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 5
                  },
                  STRING: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: "blocks"
                  }
                }
              },{
                opcode: 'iftext',
        
                blockType: Scratch.BlockType.REPORTER,
        
                text: '如果 [A] 那么 [B] 否则 [C]',
                arguments: {
                  A: {
                    type: Scratch.ArgumentType.BOOLEAN
                  },
                  B: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Blocks+'
                  },
                  C: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'JavaScript'
                  }
                }
              }
        ]
        };
      }
      
    website() {
      return "https://blocksplus.netlify.app/"
    }

    _caseInsensitiveRegex(str) {
		return new RegExp(
			str.replaceAll(/[^a-zA-Z0-9]/g, "\\$&"),
			"gi"
		);
	}
    change(args) {
        args.STRING = args.STRING.toString();
        args.SUBSTRING = args.SUBSTRING.toString();
        
        args.REPLACE = args.REPLACE.toString();
        
        const regex = this._caseInsensitiveRegex(args.SUBSTRING);
        
        return args.STRING.replace(regex, args.REPLACE);
    }
    
    repeat(args) {
        args.STRING = args.STRING.toString();
        args.REPEAT = Number(args.REPEAT) || 0;
        return args.STRING.repeat(args.REPEAT);
    }
    maketext(args) {
        let result = '';
        for (let i = 0; i < args.length; i++) {
          result += args.list[Math.floor(Math.random() * args.list.length)];
        }
        return result;
      }	
    iftext({A, B, C}) {
        return A ? B : C;
      }
    
    count(args) {
    args.STRING = args.STRING.toString().toLowerCase();
    args.SUBSTRING = args.SUBSTRING.toString().toLowerCase();
    
    return args.STRING.split(args.SUBSTRING).length - 1;
    }
    indexof(args) {
        args.STRING = args.STRING.toString().toLowerCase();
        args.SUBSTRING = args.SUBSTRING.toString().toLowerCase();
        const found = args.STRING.indexOf(args.SUBSTRING);
        return found === -1 ? 0 : found + 1;
      }
    
      letters_of(args) {
                args.STRING = args.STRING.toString();
                args.LETTER1 = Number(args.LETTER1) || 0;
                args.LETTER2 = Number(args.LETTER2) || 0;
                return args.STRING.substring(args.LETTER1 - 1, args.LETTER2);
            }
    }
    Scratch.extensions.register(new StrictEqualityExtension());
  })(Scratch);