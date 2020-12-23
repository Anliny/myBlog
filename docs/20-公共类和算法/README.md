## 密码验证
```
^(?![A-Za-z]+$)(?![A-Z\d]+$)(?![A-Z\W]+$)(?![a-z\d]+$)(?![a-z\W]+$)(?![\d\W]+$)\S{8,}$
```
> 可以输入数字，大小写字母，特殊字符的三种，长度为8-16位

## 日期格式转换 YYYY-MM-DD hh:mm:ss

```
*  type 传入的类型  值为： 1 2 3
*  1  yyyy-MM-dd hh:mm:ss
*  2  yyyy-MM-dd hh:mm
*  3  yyyy-MM-dd 
*  time  传入的日期

const formatTime = (time, type) => {
    if (!time) {
        return null
    }
    let temp_date = new Date(time);
    let yy = temp_date.getFullYear()
    let MM = temp_date.getMonth() + 1
    let dd = temp_date.getDate()
    let hh = temp_date.getHours()
    let mm = temp_date.getMinutes()
    let ss = temp_date.getSeconds()

    if (type == 1) {
        return `${yy}-${MM > 9 ? MM : '0' + MM}-${dd > 9 ? dd : '0' + dd} ${hh > 9 ? hh : '0' + hh}:${mm > 9 ? mm : '0' + mm}:${ss > 9 ? ss : '0' + ss}`
    }
    if (type == 2) {
        return `${yy}-${MM > 9 ? MM : '0' + MM}-${dd > 9 ? dd : '0' + dd} ${hh > 9 ? hh : '0' + hh}:${mm > 9 ? mm : '0' + mm}`
    }
    if (type == 3) {
        return `${yy}-${MM > 9 ? MM : '0' + MM}-${dd > 9 ? dd : '0' + dd}`
    }
}
```
## 根据一个数组过滤另一个数组
```
<!DOCTYPE html>
<html lang="zh-CN">
 
<body>
    <script>
        //筛选数组：[{id:2},{id:3}]
        let ids = [2, 3];
        let arr = [{id: 1},{id: 2 },{ id: 3}];
        let newArr = [];
 
        arr.forEach(item => {
            if (ids.includes(item.id)) {
                newArr.push(item);
            };
        })
 
        console.log(newArr); //输出：[{id:2},{id:3}]
    </script>
</body>
</html>
```
> 原文链接：https://blog.csdn.net/frank_fong/java/article/details/94743401


## 经度正则验证
```
const checkLong = (lng) => {
    var longrg = /^(\-|\+)?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,6})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,6}|180)$/;
    if (!longrg.test(lng)) {
        return false
    } else {
        return true
    }
}
```


## 纬度正则验证
 ```
const checkLat = (lat) => {
    var latreg = /^(\-|\+)?([0-8]?\d{1}\.\d{0,6}|90\.0{0,6}|[0-8]?\d{1}|90)$/;
    // var lat = $("#itemform [id='lat']").val();
    if (!latreg.test(lat)) {
        return false
    } else {
        return true
    }
}
```
