export default {

  checkPhone (phone) {
    if (/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(phone) && phone.length === 11) {
      return true
    } else {
      return false
    }
  },
  CheckUrl (str) {
    var RegUrl = new RegExp();
    RegUrl.compile("^[A-Za-z]+://[A-Za-z0-9-_]+\\.[A-Za-z0-9-_%&\?\/.=]+$");
    if (!RegUrl.test(str)) {
        return false;
    }
    return true;
  },
  isEmptyObject (obj) {
    for (var key in obj) {
      return false
    }
    return true
  },
  isCharN (str, minNum, num) {
    // let reg = /^[0-9a-zA-Z-_.\u4e00-\u9fa5]{0,20}$/
    let reg = new RegExp('^[0-9a-zA-Z-_.\\u4e00-\\u9fa5]{' + minNum + ',' + num + '}$', 'gim')
    if (!reg.test(str)) {
      return false
    } else {
      return true
    }
  },

  isNumN (str, minNum, num) {
    // var regNum10 = /^\d{0,20}$/
    let reg = new RegExp('^\\d{' + minNum + ',' + num + '}$')
    if (!reg.test(str)) {
      return false
    } else {
      return true
    }
  },

  checkMobile (str) {
    let reg = new RegExp('^\\d{11,15}$', 'g')
    if (reg.test(str)) {
      return true
    } else {
      return false
    }
  },
  checkNickname (str) {
    let reg = new RegExp('[0-9a-zA-Z_]{1,10}', 'g')
    if (reg.test(str)) {
      return true
    } else {
      return false
    }
  },
  checkName (str, min, max) {
    let reg = new RegExp('^[\\u4e00-\\u9fa5\\0-9a-zA-Z_]{' + min + ',' + max + '}$', 'g')
    if (reg.test(str)) {
      return true
    } else {
      return false
    }
  }
}
