(function (Scratch) {
    'use strict';

    class FetchZH {
        getInfo() {
            return {
                id: 'fetch',
                name: '获取',
                blocks: [
                    {
                        opcode: 'website',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'Blocks+ Website'
                    },
                      
                          
                      "---",
                
                    {
                        opcode: 'get',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '获取 [URL] 的内容',
                        arguments: {
                            URL: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'https://extensions.turbowarp.org/hello.txt'
                            }
                        }
                    }
                ]
            };
        }

        website() {
            return "https://blocksplus.netlify.app/"
        }
        
        get(args) {
            return fetch(args.URL)
                .then(r => r.text())
                .catch(() => '');
        }
    }

    Scratch.extensions.register(new FetchZH());
})(Scratch);