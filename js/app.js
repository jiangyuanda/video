window.onload = function () {
    /**
     * 获取本地视频流
     *      1. 需要一个接口：提供当前的方法调用的一些功能
     *          navigator:  提供视频注册的一些活动
     *      2. 使用哪一个: 
     *          目的：获取相机权限，开启摄像头
     *              mediaDevices：提供访问链接媒体输入的设备(相机、麦克风、视频...)
     *      3. 得到用户的设备,使用户开启设备权限
     *          getUserMedia()
     *              constraints: 流的触发的参数，得到用户许可的参数
     *      4. 得到用户的视频流输出
     * 
     */

    //  console.log(navigator.mediaDevices.getUserMedia);
    // 调用设备成功
    var constraints = {video: true};
    navigator.mediaDevices.getUserMedia(constraints).then(function (mediaStream) {//调用设备成功执行的方法
        //获取video
        var video = document.getElementById("video");
        console.log(video);
        video.srcObject = mediaStream;
    });
};