(function(Scratch) {
    'use strict';
    class StrictEqualityExtension {
      getInfo() {
        return {
            id: 'aibr', 
            name: '任意进制',
            color1: '#79bb5d',
            color2: '#30591E',
            color3: '#30591E',
            blocks: [
  
              {
                opcode: 'website',
                blockType: Scratch.BlockType.REPORTER,
                text: 'Blocks+ Website'
              },
              
                  
              "---",

              {
                opcode: 'aibr',
                blockType: Scratch.BlockType.REPORTER,
                text: '将 [into1] 进制的 [number] 转换为 [into2] 进制',
                arguments: {
                    into1:{
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: "10"
                    },
                    into2:{
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: "2"
                    },
                    number:{
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: "2023"
                    }
                }
              }
        ]
        };
      }
      
    website() {
      return "https://blocksplus.netlify.app/"
    }
    convertBase(number, into1, into2) {
    let dec = parseInt(number, into1);
    let result = dec.toString(into2);
    return result;
    }
    aibr(args) {
        if (args.into1 > 1 && args.into1 < 37 && args.into2 > 1 && args.into2 < 37 ) {
            return this.convertBase(args.number,args.into1,args.into2);
        }else{
            return "Error：进制范围应在2到36之间"
        }
        
    }

    }
    Scratch.extensions.register(new StrictEqualityExtension());
  })(Scratch);