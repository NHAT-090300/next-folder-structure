# RETX USER

### I. Công nghệ sử dụng

1. Ngôn ngữ: JavaScript, TypeScript
2. Nền tảng: NextJS
3. Quản lý state: Redux, Redux-thunk, Redux toolkit
4. Call API: Axios
5. Web3: Viem, wagmi

### II. Cách chạy source code

1. Cài đặt thư viện

```
yarn install
```

2. Chạy source

   2.1 Môi trường development

   ```
   yarn dev
   ```

   2.2 Môi trường production

   ```
   yarn build && yarn start
   ```

### III. Biến môi trường

Tên file: .env

Đường dẫn: ./.env

```
ENDPOINT=... // host API (Ví dụ: https://api.com)
API_PREFIX_RETX=... // prefix của retx service api
API_PREFIX_SCM=... // prefix của scm service api
API_PREFIX_TOPUP=... // prefix của topup service api
API_PREFIX_IDENTITY=... // prefix của identity service api
API_PREFIX_NOTIFICATION=... // prefix của notification service api
```

> LƯU Ý: Các giá trị cho development và production nằm trong https://github.com/Asset-Tokenization/system_environment

### IV. Mô tả các module

1. apis

   1.1 Đường dẫn: `./src/apis`

   1.2 Mô tả:

   Định nghĩa các api cần thiết cho dự án sử dụng **axios**

   headers mặc định:

   ```
   {
       "Authorization": 'Bearer ' + <access_token>,
       "Accept-language": "vi", // vi hoặc en
   }
   ```

2. contracts
   2.1 Đường dẫn: `./src/contracts`

   2.2 Mô tả:

   Định nghĩa các smart contract services cần thiết cho dự án.

3. components

   3.1 Đường dẫn: `./src/components`

   3.2 Mô tả:

   Tạo ra các common components cho các features

4. layouts

   4.1 Đường dẫn: `./src/layouts`

   4.2 Mô tả:

   Tạo ra các layout để dùng chung cho các pages

5. features

   5.1 Đường dẫn: `./src/features`

   5.2 Mô tả:

   Nhóm các tính năng của ứng dụng: bao gồm component, hook, container theo từng tính năng

6. models

   6.1 Đường dẫn: `./src/models`

   6.2 Mô tả:

   Định nghĩa các đối tượng dữ liệu trong dự án như User, Asset, Smart contract,...

7. pages

   7.1 Đường dẫn: `./src/pages`

   7.2 Mô tả:

   Chứa các trang trong dự án

8. resources

   8.1 Đường dẫn: `./src/resources`

   8.2 Mô tả:

   Chứa các dữ liệu hỗ trợ dự án như css, icon, mock data, multiple language

9. store (redux)

   9.1 Đường dẫn: `./src/store`

   9.2 Mô tả:

   Quản lý các state của dự án sử dụng redux-toolkit

10. utils

    10.1 Đường dẫn: `./src/utils`

    10.2 Mô tả:

Định nghĩa các biến hằng, biến và function được sử dụng nhiều trong dự án

11. hooks

    11.1 Đường dẫn: `./src/hooks`

    11.2 Mô tả:

Bao gồm các custom hook được sử dụng chung trong các components, features, pages

12. hocs

    12.1 Đường dẫn: `./src/hocs`

    12.2 Mô tả:

Bao gồm các higher order component được sử dụng trong các components, features, pages

13. validates

    13.1 Đường dẫn: `./src/validates`

    13.2 Mô tả:

Định nghĩa một Object schema và validation với thư viện (yup).
