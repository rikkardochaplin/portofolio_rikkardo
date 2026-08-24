# 🏆 Enterprise Portfolio Showcase - Orion ERP & AS/400 RPG Simulator (Ultra-Advanced Edition)

**Candidate Portfolio Package** prepared specifically for the **ERP Developer (RPG Programmer)** position at **H&K MPP Manufacturing Indonesia** (Tangerang).

---

## 📌 Project Executive Overview

- **Project Name**: Orion Enterprise Manufacturing ERP System & IBM iSeries (AS/400) RPG Simulator
- **Target Company**: H&K MPP Manufacturing Indonesia (Manufacturing & Supply Chain Industry)
- **Target Position**: ERP Developer (RPG Programmer)
- **Technology Stack**:
  - **Mid-Range / Core**: IBM iSeries (AS/400), OS/400, RPG IV (ILE RPG), RPG Free Format, Control Language (CLP), DB2 for i, SQL (STRSQL), QAUDJRN Security Journaling, WRKSPLF, WRKACTJOB.
  - **Frontend Showcase**: Modern Glassmorphic CSS3, HTML5, Vanilla JavaScript Engine, LocalStorage Data Persistence.

---

## 📸 Interactive System Modules & Screenshots

### 1. Executive Dashboard & Real-Time KPIs
![Executive Dashboard](file:///C:/Users/TobingRi/.gemini/antigravity-ide/brain/fbab8ce3-bc22-4492-a603-aa3747dd73fd/shot_1_dashboard_1786504801048.png)
- **Technical Explanation**: Executive dashboard summarizing Total Inventory Valuation (DB2 `INVMSTP`), Active Work Orders (`WKHEDP`), Unposted General Ledger Vouchers (`VCHDTLP`), and Security Audit Alerts (`QAUDJRN`). Includes automated **RPG Free Reorder Triggers** and a live AS/400 system audit log.

---

### 2. Material Requirements Planning (MRP) & MES Work Orders
![Manufacturing Execution System](file:///C:/Users/TobingRi/.gemini/antigravity-ide/brain/fbab8ce3-bc22-4492-a603-aa3747dd73fd/completed_work_orders_1786505499414.png)
- **Technical Explanation**: Multi-level Bill of Materials (BOM) explosion engine (`BOM_EXPLODE.RPGLE`) and automated Material Requirements Planning (`MRP_ENGINE.RPGLE`). Calculates net demand against safety stock thresholds, reserves component raw materials, and completes Finished Goods assembly batches into warehouse bin locations.

---

### 3. AS/400 Work with Spooled Files Engine (WRKSPLF Print Output Viewer)
![AS/400 Spooled File Display](file:///C:/Users/TobingRi/.gemini/antigravity-ide/brain/fbab8ce3-bc22-4492-a603-aa3747dd73fd/shot_10_wrksplf_1786505641072.png)
- **Technical Explanation**: Emulation of the IBM i `WRKSPLF` command and print queues (`QPRINT`, `ORIONPRT`). Renders 132-column green-bar ASCII report previews for Inventory Valuation (`INVAUDIT`), GL Trial Balance (`GLPOST`), and MRP Requisition Output (`MRPRUN`).

---

### 4. AS/400 Work with Active Jobs Engine (WRKACTJOB Subsystem Controller)
![Active Subsystems and Jobs](file:///C:/Users/TobingRi/.gemini/antigravity-ide/brain/fbab8ce3-bc22-4492-a603-aa3747dd73fd/shot_11_wrkactjob_1786505657574.png)
- **Technical Explanation**: Emulation of the IBM i `WRKACTJOB` / `WRKSBS` subsystem management screen. Monitors active subsystems (`QINTER`, `QBATCH`, `QCTL`), CPU % utilization, job status (`RUN`, `TIMW`), and interactive job holding controls (`HLDJOB`).

---

### 5. Inventory & Warehouse Bin Management
![Inventory & Warehouse Management](file:///C:/Users/TobingRi/.gemini/antigravity-ide/brain/fbab8ce3-bc22-4492-a603-aa3747dd73fd/shot_2_inventory_1786504810876.png)
- **Technical Explanation**: Real-time warehouse safety stock monitoring with bin location tracking (`BIN-A01`, `BIN-FG01`). Supports interactive stock adjustments (*Stock In*, *Stock Out*, *Physical Count*) with automatic transaction logging into DB2 physical file `STKLOGP`.

---

### 6. Sales & Procurement Order Workflows (PO & SO)
![Sales & Purchasing Orders](file:///C:/Users/TobingRi/.gemini/antigravity-ide/brain/fbab8ce3-bc22-4492-a603-aa3747dd73fd/shot_3_orders_1786504820743.png)
- **Technical Explanation**: End-to-end supply chain integration. Receiving Purchase Orders automatically updates stock quantities on hand and generates Accounts Payable vouchers. Dispatching Customer Sales Orders verifies inventory levels, deducts stock, and generates Accounts Receivable invoices.

---

### 7. Financials (General Ledger, AR & AP Integration)
![Finance & General Ledger](file:///C:/Users/TobingRi/.gemini/antigravity-ide/brain/fbab8ce3-bc22-4492-a603-aa3747dd73fd/shot_4_financials_1786504829914.png)
- **Technical Explanation**: Batch journal voucher posting engine simulating RPG program `GL_POST_BATCH.RPGLE`. Validates debit/credit balance integrity before posting lines to General Ledger Master (`GLMSTP`). Includes AR invoice payment collection and AP vendor payment disbursement workflows.

---

### 8. IBM iSeries AS/400 RPG IV & RPG Free Source Inspector
![AS/400 RPG Source Inspector](file:///C:/Users/TobingRi/.gemini/antigravity-ide/brain/fbab8ce3-bc22-4492-a603-aa3747dd73fd/shot_5_as400_inspector_1786504845474.png)
- **Technical Explanation**: Interactive source code reader featuring clean, enterprise-grade RPG Free Format (`**FREE`), ILE RPG, Control Language (`CLP`), and DB2 SQL scripts. Features an animated 5250 green-screen compiler output terminal.

---

### 9. Interactive DB2 STRSQL Console
![Interactive DB2 SQL Console](file:///C:/Users/TobingRi/.gemini/antigravity-ide/brain/fbab8ce3-bc22-4492-a603-aa3747dd73fd/shot_6_sql_console_1786504863374.png)
- **Technical Explanation**: Fully functional DB2 SQL query execution console. Users can enter custom SQL statements or choose predefined presets to query active DB2 relational tables in real-time.

---

### 10. OS/400 Security Journaling & RBAC Access Control
![Security & Audit Journal](file:///C:/Users/TobingRi/.gemini/antigravity-ide/brain/fbab8ce3-bc22-4492-a603-aa3747dd73fd/shot_7_security_audit_1786504872912.png)
- **Technical Explanation**: Role-Based Access Control (RBAC) supporting OS/400 User Profiles (`QSECOFR`, `FIN_MGR`, `WHS_OPER`, `RECRUITER`). Enforces strict permission limits, blocks destructive SQL injection attacks (`DROP TABLE`), and logs audit events to `SECAUDP`.

---

### 11. IBM i 5250 Session Lock Screen
![5250 Sign-On Lock Screen](file:///C:/Users/TobingRi/.gemini/antigravity-ide/brain/fbab8ce3-bc22-4492-a603-aa3747dd73fd/shot_8_lock_screen_1786504881073.png)
- **Technical Explanation**: Authentic emulation of the IBM i v7r4 5250 terminal Sign-On screen. Requires password authentication to unlock sessions and logs failed sign-on attempts.

---

### 12. Candidate Qualifications & Application Dossier
![Candidate Application Dossier](file:///C:/Users/TobingRi/.gemini/antigravity-ide/brain/fbab8ce3-bc22-4492-a603-aa3747dd73fd/shot_9_dossier_1786504932980.png)
- **Technical Explanation**: Formal application package tailored directly to H&K MPP Manufacturing Indonesia requirements. Features a 100% qualifications match checklist, customizable candidate profile info, cover letter generator, and printable PDF exporter.

---

## 📝 Text Highlights for Your CV & Portfolio

You can copy and paste the following bullet points directly into your **Resume / CV**, **LinkedIn Projects**, or **Cover Letter**:

### 🎯 Key Accomplishments to List on Your Resume:
- **Built Ultra-Advanced Enterprise Manufacturing ERP System & IBM iSeries Simulator**: Designed and implemented a full-scale Orion-inspired ERP supporting Inventory, Manufacturing Execution (MES & BOM), Material Requirements Planning (MRP), Purchasing, Sales, General Ledger (AR/AP/GL), and Infrastructure Security modules.
- **Mastery in RPG Free Format & ILE Architecture**: Developed RPG Free Format (`**FREE`) modules for automated stock reordering (`INV_REORDER_AUTO`), net demand planning (`MRP_ENGINE`), multi-level BOM allocation (`BOM_EXPLODE`), and General Ledger batch posting (`GL_POST_BATCH`).
- **OS/400 Spooling & Subsystem Job Management**: Implemented OS/400 print queue spooled file viewers (`WRKSPLF`) rendering 132-column green-bar reports and active subsystem job queue controllers (`WRKACTJOB`).
- **DB2 for i Relational Database Design**: Structured physical DB2 tables (`INVMSTP`, `BOMMSTP`, `MRPMSTP`, `WKHEDP`, `POHEDP`, `VCHDTLP`, `SECAUDP`) with indexes and embedded SQL integration.
- **Implemented OS/400 Security & RBAC Enforcer**: Developed Role-Based Access Controls (RBAC) simulating IBM i User Profiles (`QSECOFR`, `FIN_MGR`, `WHS_OPER`) with SQL injection prevention and security journaling (`QAUDJRN`).
