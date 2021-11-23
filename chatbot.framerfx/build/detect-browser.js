// Internet Explorer 6-11
var isIE = /*@cc_on!@*/ false || !!document.documentMode

console.log('isIE', isIE)
if (isIE) {
  var r = confirm(
    '지원되지 않는 브라우저 입니다.\n이 챗봇은 Chrome에 최적화 되어 있습니다.\nChrome을 다운로드 하시겠습니까?'
  )
  if (r == true) window.location = 'https://www.google.com/intl/ko/chrome/'
}
