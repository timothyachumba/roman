define({

  toTitleCase: function (str) {

    return str.replace(/(?:^|\s)\w/g, function(match) {

        return match.toUpperCase();
    });
  },

  addCommasToNumber: function (count) {

    var self = this;
    return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },

  'getRandomNumber': function (max) {

    return Math.floor((Math.random() * max) + 1);
  },

  'isPage': function (page) {

    return window.location.href.indexOf(page) !== -1;
  },

  isEMail: function (text) {

    var emailExp = /(\w[\-._+\w]*@\w[\-._\w]*\w\.\w{2,6})/i;

    if (/\s/.test(text)) return false;
    return emailExp.test(text);
  }

});