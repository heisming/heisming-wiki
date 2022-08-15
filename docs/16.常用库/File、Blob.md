# CSV
```HTML
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      const data = [
        ['张朋', '男', new Date('1994-02-02')],
        ['李艳', '女', new Date('1993-03-03')],
      ];

      function processRow(row) {
        let finalVal = '';
        for (let j = 0; j < row.length; j++) {
          let innerValue = row[j] === null ? '' : row[j].toString();
          if (row[j] instanceof Date) {
            innerValue = row[j].toLocaleString();
          }
          let result = innerValue.replace(/"/g, '""');
          if (result.search(/("|,|\n)/g) >= 0) result = `"${result}"`;
          if (j > 0) finalVal += ',';
          finalVal += result;
        }
        return finalVal;
      }

      const csvString = data.map(item => processRow(item)).join('\n');

      // 前置的"\uFEFF"为“零宽不换行空格”，可处理中文乱码问题
      const blob = new Blob([`\uFEFF${csvString}`], { type: 'text/csv;charset=gb2312;' });

      const a = document.createElement('a');
      a.download = new Date('2022-07-28') + '.csv'; // 这里替换为你需要的文件名
      a.href = URL.createObjectURL(blob);
      a.click();
    </script>
  </body>
</html>

```

excel
```js
import { writeFile, utils } from 'xlsx';
 const res = await getSchoolFeeOrdersExportApi(
    ...orderForm.range,
    orderForm.status,
    orderForm.schoolFeeName,
    orderForm.schoolUuid,
    orderForm.gradeName,
    orderForm.classeName,
    orderForm.mobile,
    orderForm.studentName,
    orderForm.tradeNo,
    orderForm.transactionId
  );
  const data = utils.json_to_sheet(
    res.map((data, index) => ({
      序号: index + 1,
      名称: data.schoolFee.name,
      学校: data.school.name,
      年级: data.gradeName,
      班级: data.classeName,
      学生: data.student.name,
      手机号: data.user.mobile,
      金额: data.price / 100,
      订单状态: OrderStatusName[data.order.status as keyof typeof OrderStatusName],
      订单号: data.order.tradeNo,
      微信订单号: data.order.transactionId,
      支付时间: data.order.payAt ? FormatUtil.formatDate(data.order.payAt) : '-',
      创建时间: FormatUtil.formatDate(data.createdAt),
    }))
  );
  const wb = utils.book_new();
  utils.book_append_sheet(wb, data, '订单');
  writeFile(wb, '导出订单.xlsx');
```