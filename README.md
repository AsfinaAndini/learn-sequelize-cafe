Learn Sequelize 

User
npx sequelize-cli model:generate --name user --attributes nama_user:string,role:enum:'{user,admin,kasir,manager}',username:string,password:string 

Menu
npx sequelize-cli model:generate --name menu  --attributes nama_menu:string,jenis:enum:'{makanan,minuman}',deskripsi:text,gambar:string,harga:integer

Meja
npx sequelize-cli model:generate --name meja --attributes nomor_meja:string,status:enum:'{kosong,terisi}'

Transaksi
npx sequelize-cli model:generate --name transaksi --attributes tgl_transaksi:date,id_user:integer,id_meja:integer,nama_user:string,status:enum:'{belum_bayar,lunas}',total:bigint

Detail_Transaksi
npx sequelize-cli model:generate --name detai_transaksi --attributes id_transaksi:integer,id_menu:integer,harga:integer,qty:bigint

for migrate
npx sequelize-cli db:migrate
