# WAREBASE 倉庫設施管理系統

繁體中文、響應式的倉庫設施維護工作台。以 CMMS（電腦化維護管理）流程為基礎，提供可操作的第一版。

## 功能

- 總覽：設備健康、未完成工單、逾期提醒、七日保養與巡檢合格率。
- 設備台帳：名稱、區域、類別、運作狀態、負責人及保養日。
- 維修工單：設備關聯、優先級、指派、狀態、到期日、維修費用與說明。
- 保養排程：週期設定、完成保養、建立完成紀錄及更新下次日期。
- 巡檢紀錄：合格／異常／待巡檢，異常可轉工單，避免重複轉單。
- 備品庫存：存放位置、數量、安全庫存與低庫存提示。
- 搜尋、篩選、各模組 CSV 匯出、JSON 備份與驗證還原、操作紀錄。
- 同一瀏覽器的多分頁更新通知。

## 啟動與測試

需要 Node.js 22 或更新版本，無須安裝第三方依賴。

```sh
node server.mjs
# 開啟 http://127.0.0.1:4173
node --test tests/*.test.mjs
```

也可將 `dist/` 放在任何靜態網站主機；必須透過 HTTP 開啟，避免直接使用 file://。

## 資料與使用限制

此版本是**瀏覽器本機工作空間**，使用 localStorage，並非多人共用後端。首次開啟自動建立明確標示的示範資料。不同瀏覽器、網址、裝置各自獨立；清除網站資料會移除紀錄。請定期點選側欄「備份資料」。還原會驗證結構、編號、設備關聯、日期與數值，確認後取代目前資料。

沒有帳號登入、角色權限、伺服器資料庫、IoT 即時數據、背景通知或正式稽核保證；操作紀錄也存於本機。多人同時編輯可能發生最後寫入覆蓋；不要用於多人正式營運。下一階段可接 PostgreSQL、登入與 RBAC、交易式 API、附件與排程服務。

保養完成會以「今天和既有到期日中的較晚日期」加週期，避免逾期完成後仍落在過去。巡檢合格率以已巡檢筆數為分母；「完成保養」紀錄會計入合格筆數。設備狀態由人員維護，不因工單完成自動改動。

CSV 匯出整個模組，包含篩選隱藏的紀錄，並對公式起始字元做防護。備份含完整資料，請自行妥善保管。

## 參考來源與設計依據

以下為功能規劃參考，並未複製其程式碼、品牌或介面；本系統並非這些產品的官方整合。參考日期：2026-11-15。

- [IBM：What is a CMMS?](https://www.ibm.com/think/topics/what-is-a-cmms) — 設備台帳、工單及預防性維護。
- [IBM：Work order management](https://www.ibm.com/think/topics/work-order-management) — 工單生命週期及維修歷程。
- [IBM：Preventive maintenance checklist](https://www.ibm.com/think/topics/preventive-maintenance-checklist) — 巡檢、定期保養與完成率。
- [Fiix：Work order management](https://fiixsoftware.com/cmms/work-orders/) — 工單、排程、設備與備品的整合流程。
- [Fiix：Asset maintenance management](https://fiixsoftware.com/cmms/asset-management-software/) — 集中設備資訊與維護紀錄。

視覺採自製 CSS 圖表、文字符號與 Google Fonts（DM Sans、Noto Sans TC；離線時回退系統字體）。所有營運資料皆為虛構示例。
