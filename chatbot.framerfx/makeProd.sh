# make react prod
# gsed -i '16,17d' index.html
# gsed -i '15i\<script src=\"build/react.production.min.js\"></script><script src=\"build/react-dom.production.min.js\"></script>' index.html

gsed -i '10i\<script src=\"build/detect-browser.js\"></script>' index.html

# og tags
gsed -i '11i\ <title>Chatbot<\/title><meta property=\"og:title\" content=\"Chatbot\" \/>\r\n<meta property=\"og:description\" content=\"HR Analytics회사인 챗봇에서 개발한 챗봇\" \/>\r\n<meta property=\"og:image\" content=\"\/images\/chatbot-logo.png\" \/><link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"\/images\/favicons\/apple-touch-icon.png\">\r\n<link rel=\"icon\" type=\"image\/png\" sizes=\"32x32\" href=\"\/images\/favicons\/favicon-32x32.png\">\r\n<link rel=\"icon\" type=\"image\/png\" sizes=\"16x16\" href=\"\/images\/favicons\/favicon-16x16.png\">\r\n<link rel=\"manifest\" href=\"\/images\/favicons\/site.webmanifest\">\r\n<meta name=\"msapplication-TileColor\" content=\"#da532c\">\r\n<meta name=\"theme-color\" content=\"#ffffff\">\r\n' index.html

# google analytics
# gsed -i '14i\<script async src=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=UA-135071604-1\"><\/script>\r\n<script>\r\n  window.dataLayer = window.dataLayer || [];\r\n  function gtag(){dataLayer.push(arguments);}\r\n  gtag(\"js\", new Date());\r\n\r\n  gtag(\"config\", \"UA-135071604-1\");\r\n<\/script>\r\n' index.html
