module.exports = {
    getServiceUrl: () =>{
        console.log("node.js服务器环境变量:" + process.env.CONFIGENV);
        console.log("npm run 运行环境:" + process.env.npm_lifecycle_event);
        var param = process.env.npm_lifecycle_event;
        var serviceUrl = "http://localhost:8081/api/";
        console.log("service地址:" + serviceUrl);
        return serviceUrl;
    }
};