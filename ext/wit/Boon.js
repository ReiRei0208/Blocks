(function(Scratch) {
    'use strict';
    class StrictEqualityExtension {
      getInfo() {
        return {
            id: 'llq', 
            name: 'LLQ',
            blocks: [
  
              {
                opcode: 'website',
                blockType: Scratch.BlockType.REPORTER,
                text: 'Blocks+ Website'
              },
              
                  
              "---",
        
              {
                opcode: 'createList',
                blockType: Scratch.BlockType.REPORTER,
                text: '鼠标在页面内？'
              }
        ]
        };
      }
      
    website() {
      return "https://blocksplus.netlify.app/"
    }
    // 创建列表函数
    createList(name, number) {
    let list = [];
    list.push({name: name, number: number});
    return list;
  }
  
  // 读取列表函数
    readList(name) {
    let list = createList(); // 获取列表
  
    for (let i = 0; i < list.length; i++) { // 遍历列表，查找指定名称的变量
      if (list[i].name === name) { // 找到后返回该变量的值
        return list[i].number;
      }
    }
  
    return null; // 没有找到返回null
  }
    
  // 删除列表函数  
    deleteList(name) {  
    let list = createList(); // 获取列表
  
    for (let i = 0; i < list.length; i++) { // 遍历列表，查找指定名称的变量  
      if (list[i].name === name) { // 找到后从数组中移除该变量  
        list.splice(i, 1);  
        break;  
      }  
    }  
  
    return list; // 返回新的列表  																     }
  
    }
    }
    Scratch.extensions.register(new StrictEqualityExtension());
  })(Scratch);