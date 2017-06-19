1、多条件查询的合理默认查询应该是传入固定的参数值，而不是根据是否传参数值来决定查询语句的书写，例如下面例子的默认查询应该是查询全国的全部类型的按时间排序的。

1）不合理的默认查询：
```
function onRequest(request, response, modules) {
    //方法功能：返回首页PK列表
    var Bql = modules.oBql;
    out = response;

    //城市
    var city = request.body.city;

    //内容类型
    var contentType = request.body.contentType;

    //排序方式
    var order = request.body.order;

    //页数
    var page = request.body.page;
    if (page == null || page == "") {
        error(1001, "'page' can not be null or empty");
        return;
    }
    //每页个数
    var count = request.body.count;
    if (count == null || count == "") {
        error(1001, "'count' can not be null or empty");
        return;
    }
    //列表起始位
    var start = (page - 1) * count;

    if (city == null||city=="") {
        if (contentType == null||contentType=="") {
            if (order == null||order=="") {
                Bql.exec({
                    "bql": "select * from PK limit " + start + "," + count
                }, function(err, data) {
                    success("000" + data);
                });
            } else {
                Bql.exec({
                    "bql": "select * from PK order by ? limit " + start + "," + count,
                    "values": "['" + order + "']"
                }, function(err, data) {
                    success("001" + data);

                });
            }
        } else {
            if (order == null||order=="") {
                Bql.exec({
                    "bql": "select * from PK where contentType = ? limit" + start + "," + count,
                    "values": "[" + contentType + "]"
                }, function(err, data) {
                    success("010" + data);

                });
            } else {
                Bql.exec({
                    "bql": "select * from PK where contentType = ? order by ? limit" + start + "," + count,
                    "values": "[" + contentType + ",'" + order + "']"
                }, function(err, data) {
                    success("011" + data);

                });
            }
        }
    } else {
        if (contentType == null||contentType=="") {
            if (order == null||order=="") {
                Bql.exec({
                    "bql": "select * from PK where city = ? limit " + start + "," + count,
                    "values": "['" + city + "']"
                }, function(err, data) {
                    success("100" + data);

                });
            } else {
                Bql.exec({
                    "bql": "select * from PK where city = ? order by ? limit " + start + "," + count,
                    "values": "['" + city + "','" + order + "']"
                }, function(err, data) {
                    success("101" + data);

                });
            }
        } else {
            if (order == null||order=="") {
                Bql.exec({
                    "bql": "select * from PK where city = ? and contentType = ? limit" + start + "," + count,
                    "values": "['" + city + "'," + contentType + "]"
                }, function(err, data) {
                    success("110" + data);

                });
            } else {
                Bql.exec({
                    "bql": "select * from PK where city = ? and contentType = ? order by ? limit" + start + "," + count,
                    "values": "['" + city + "'," + contentType + ",'" + order + "']"
                }, function(err, data) {
                    success("111" + data);

                });
            }
        }
    }
}

//输出错误信息
function error(code, error) {
    out.send({ "code": code, "error": error, "data": null });
}

//输出成功信息
function success(data) {
    out.send({ "code": 200, "error": null, "data": data });
}

```


2）合理的默认查询：传入“全国”，“0”，“-createdAt”。

```
function onRequest(request, response, modules) {
    //方法功能：返回首页PK列表
    var Bql = modules.oBql;
    out = response;

    //城市
    var city = request.body.city;

    //内容类型
    var contentType = request.body.contentType;

    //排序方式
    var order = request.body.order;

    //页数
    var page = request.body.page;
    if (page == null || page == "") {
        error(1001, "'page' can not be null or empty");
        return;
    }
    //每页个数
    var count = request.body.count;
    if (count == null || count == "") {
        error(1001, "'count' can not be null or empty");
        return;
    }
    //列表起始位
    var start = (page - 1) * count;

    Bql.exec({
        "bql": "select * from PK where city = ? and contentType = ? order by ? limit" + start + "," + count,
        "values": "['" + city + "'," + contentType + ",'" + order + "']"
    }, function(err, data) {
        success("111" + data);

    });

    //输出错误信息
    function error(code, error) {
        out.send({ "code": code, "error": error, "data": null });
    }

    //输出成功信息
    function success(data) {
        out.send({ "code": 200, "error": null, "data": data });
    }

```


