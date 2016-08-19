var FCM = require('fcm-push');

const apiKey = 'API-KEY';

const fcm = new FCM(apiKey);

const device1 = 'DEVICE-REGISTRATION-ID';

const message = {
   registration_ids : [device1],
   notification : {
      title : '메세지 제목',
      text : 'FCM 메세지 내용',
      icon : 'ic_football'
   }
};

const topicMessage = {
   to : '/topics/NEWS',
   notification : {
      title : '뉴스 토픽',
      text : '새로운 뉴스!'
   }
}

// 토픽 메세지는 버그가 있는듯
fcm.send(topicMessage, (err, results) => {
   if (err) {
      console.error('Error : ', err);
      return;
   }

   console.log('Success : ', results);
});