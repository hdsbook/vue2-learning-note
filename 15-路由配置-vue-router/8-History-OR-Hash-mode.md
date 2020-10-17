VueRouter 的 mode 設定預設為 `hash`，會在根網址多一個 #

為的是確保所有的網址都經由根目錄的 index.html 來解析

如果改為 `history`，則唯然在 npm run dev 的環境下是正常的

但真正上線時，需要設定 URL Rewrite，使所有 request 都由 index.html 來解析

不然直接用網址進入路由時會無法正常運作