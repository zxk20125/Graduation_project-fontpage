# 使用文档

【管道说明】

封装下载管道,适合从后台下载大型文件

## 参数
共1个参数:
- `option`,是对象类型,【必填】,
例如:`{
    data:{filePath: ctx.filePath},
    type:'get',
    url:`${axios.server}/file2/download`,
    success(response){
        debugger
        if(response.status==200){
           ctx.$message({
                        type: 'success',
                        message: '开始下载，请稍候…'
                    });
        }else{
            ctx.$message({
                        type: 'error',
                        message: '下载失败，请确认输入框是否为返回文件名…'
                    });
        }
    }
}`

## 使用方法

```
pipe.download([参数])
```

## 使用例子

下载
```
pipe.download({
    data:{filePath: ctx.filePath},
    type:'get',
    url:`${axios.server}/file2/download`,
    success(response){
        debugger
        if(response.status==200){
           ctx.$message({
                        type: 'success',
                        message: '开始下载，请稍候…'
                    });
        }else{
            ctx.$message({
                        type: 'error',
                        message: '下载失败，请确认输入框是否为返回文件名…'
                    });
        }
    }
})

## options属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| data      |  文件路径  | object   | - | - |
| type    |  请求类型  | string   | post/get | get |
| url    |  后台接口地址  | string   | - | - |
| success    |  回调函数  | function   | - | - |

