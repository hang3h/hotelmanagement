db.areas.drop();
db.areas.insertMany([
  { areaCode: 'A', description: 'Khu vực A', numberOfFloors: 6 },
  { areaCode: 'B', description: 'Khu vực B', numberOfFloors: 4 },
  { areaCode: 'C', description: 'Khu vực C', numberOfFloors: 4 }
]);

db.users.drop();
db.users.insertMany([
  { username: 'admin', fullname: 'Administrator', status: 1, password: '$2b$10$5AzrWftkmWTkda0.4sEtQeJgVHB9f2io8rgMB0J8pKQCD5gaCiTSa', email: 'admin@example.com', role: 'admin' },
  { username: 'ngoc', fullname: 'Đặng Tấn Ngọc', status: 1, password: '$2b$10$7OPe3ZTY.8m5vUqwvgjucORCjlFd27Te.U0YUeiLaPRWJXvTfxpoe', email: 'ngoc@example.com', role: 'admin' },
  { username: 'giamdochang', fullname: 'Giám Đốc Hằng', status: 1, password: '$2b$10$7OPe3ZTY.8m5vUqwvgjucORCjlFd27Te.U0YUeiLaPRWJXvTfxpoe', email: 'directorhang@example.com', role: 'director' },
  { username: 'giamdocbin', fullname: 'Giám Đốc Bin', status: 1, password: '$2b$10$7OPe3ZTY.8m5vUqwvgjucORCjlFd27Te.U0YUeiLaPRWJXvTfxpoe', email: 'directorbin@example.com', role: 'director' },
  { username: 'quanlyhung', fullname: 'Quản Lý Hùng', status: 1, password: '$2b$10$7OPe3ZTY.8m5vUqwvgjucORCjlFd27Te.U0YUeiLaPRWJXvTfxpoe', email: 'managerhung@example.com', role: 'manager' },
  { username: 'quanlyhang', fullname: 'Quản Lý Hằng', status: 1, password: '$2b$10$7OPe3ZTY.8m5vUqwvgjucORCjlFd27Te.U0YUeiLaPRWJXvTfxpoe', email: 'managerhang@example.com', role: 'manager' },
  { username: 'quanlylong', fullname: 'Quản Lý Long', status: 1, password: '$2b$10$7OPe3ZTY.8m5vUqwvgjucORCjlFd27Te.U0YUeiLaPRWJXvTfxpoe', email: 'managerlong@example.com', role: 'manager' },
  { username: 'tieptana', fullname: 'Tiếp Tân A', area: db.areas.findOne({ areaCode: "A" })._id, status: 1, password: '$2b$10$7OPe3ZTY.8m5vUqwvgjucORCjlFd27Te.U0YUeiLaPRWJXvTfxpoe', email: 'tieptana@example.com', role: 'receptionist' },
  { username: 'tieptanb', fullname: 'Tiếp Tân B', area: db.areas.findOne({ areaCode: "B" })._id, status: 1, password: '$2b$10$7OPe3ZTY.8m5vUqwvgjucORCjlFd27Te.U0YUeiLaPRWJXvTfxpoe', email: 'tieptanb@example.com', role: 'receptionist' },
  { username: 'tieptanc', fullname: 'Tiếp Tân C', area: db.areas.findOne({ areaCode: "C" })._id, status: 1, password: '$2b$10$7OPe3ZTY.8m5vUqwvgjucORCjlFd27Te.U0YUeiLaPRWJXvTfxpoe', email: 'tieptanc@example.com', role: 'receptionist' },
  { username: 'tieptand', fullname: 'Tiếp Tân D', area: db.areas.findOne({ areaCode: "A" })._id, status: 1, password: '$2b$10$7OPe3ZTY.8m5vUqwvgjucORCjlFd27Te.U0YUeiLaPRWJXvTfxpoe', email: 'tieptand@example.com', role: 'receptionist' },
]);


db.rooms.drop();
db.rooms.insertMany([
  { roomCode: 'A101', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 1, status: 'available', description: `Phòng A101`, note: '' },
  { roomCode: 'A102', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 1, status: 'available', description: `Phòng A102`, note: '' },
  { roomCode: 'A103', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 1, status: 'available', description: `Phòng A103`, note: '' },
  { roomCode: 'A104', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 1, status: 'available', description: `Phòng A104`, note: '' },
  { roomCode: 'A105', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 1, status: 'available', description: `Phòng A105`, note: '' },
  { roomCode: 'A106', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 1, status: 'available', description: `Phòng A106`, note: '' },
  { roomCode: 'A107', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 1, status: 'available', description: `Phòng A107`, note: '' },
  { roomCode: 'A108', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 1, status: 'available', description: `Phòng A108`, note: '' },
  { roomCode: 'A109', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 1, status: 'available', description: `Phòng A109`, note: '' },
  { roomCode: 'A110', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 1, status: 'available', description: `Phòng A110`, note: '' },
  { roomCode: 'A111', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 1, status: 'available', description: `Phòng A111`, note: '' },
  { roomCode: 'A112', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 1, status: 'available', description: `Phòng A112`, note: '' },
  { roomCode: 'A201', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 2, status: 'available', description: `Phòng A201`, note: '' },
  { roomCode: 'A202', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 2, status: 'available', description: `Phòng A202`, note: '' },
  { roomCode: 'A203', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 2, status: 'available', description: `Phòng A203`, note: '' },
  { roomCode: 'A204', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 2, status: 'available', description: `Phòng A204`, note: '' },
  { roomCode: 'A205', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 2, status: 'available', description: `Phòng A205`, note: '' },
  { roomCode: 'A206', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 2, status: 'available', description: `Phòng A206`, note: '' },
  { roomCode: 'A207', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 2, status: 'available', description: `Phòng A207`, note: '' },
  { roomCode: 'A208', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 2, status: 'available', description: `Phòng A208`, note: '' },
  { roomCode: 'A209', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 2, status: 'available', description: `Phòng A209`, note: '' },
  { roomCode: 'A210', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 2, status: 'available', description: `Phòng A210`, note: '' },
  { roomCode: 'A211', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 2, status: 'available', description: `Phòng A211`, note: '' },
  { roomCode: 'A212', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 2, status: 'available', description: `Phòng A212`, note: '' },
  { roomCode: 'A301', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 3, status: 'maintenance', description: `Phòng A301`, note: '' },
  { roomCode: 'A302', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 3, status: 'maintenance', description: `Phòng A302`, note: '' },
  { roomCode: 'A303', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 3, status: 'available', description: `Phòng A303`, note: '' },
  { roomCode: 'A304', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 3, status: 'available', description: `Phòng A304`, note: '' },
  { roomCode: 'A305', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 3, status: 'available', description: `Phòng A305`, note: '' },
  { roomCode: 'A306', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 3, status: 'available', description: `Phòng A306`, note: '' },
  { roomCode: 'A307', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 3, status: 'available', description: `Phòng A307`, note: '' },
  { roomCode: 'A308', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 3, status: 'maintenance', description: `Phòng A308`, note: '' },
  { roomCode: 'A309', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 3, status: 'available', description: `Phòng A309`, note: '' },
  { roomCode: 'A310', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 3, status: 'available', description: `Phòng A310`, note: '' },
  { roomCode: 'A311', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 3, status: 'available', description: `Phòng A311`, note: '' },
  { roomCode: 'A312', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 3, status: 'available', description: `Phòng A312`, note: '' },
  { roomCode: 'A401', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 4, status: 'available', description: `Phòng A401`, note: '' },
  { roomCode: 'A402', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 4, status: 'maintenance', description: `Phòng A402`, note: '' },
  { roomCode: 'A403', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 4, status: 'available', description: `Phòng A403`, note: '' },
  { roomCode: 'A404', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 4, status: 'available', description: `Phòng A404`, note: '' },
  { roomCode: 'A405', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 4, status: 'available', description: `Phòng A405`, note: '' },
  { roomCode: 'A406', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 4, status: 'available', description: `Phòng A406`, note: '' },
  { roomCode: 'A407', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 4, status: 'available', description: `Phòng A407`, note: '' },
  { roomCode: 'A408', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 4, status: 'available', description: `Phòng A408`, note: '' },
  { roomCode: 'A409', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 4, status: 'available', description: `Phòng A409`, note: '' },
  { roomCode: 'A410', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 4, status: 'available', description: `Phòng A410`, note: '' },
  { roomCode: 'A411', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 4, status: 'available', description: `Phòng A411`, note: '' },
  { roomCode: 'A412', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "A" })._id, floor: 4, status: 'available', description: `Phòng A412`, note: '' },
  { roomCode: 'A501', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "A" })._id, floor: 5, status: 'available', description: `Phòng A501`, note: '' },
  { roomCode: 'A502', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "A" })._id, floor: 5, status: 'available', description: `Phòng A502`, note: '' },
  { roomCode: 'A503', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "A" })._id, floor: 5, status: 'available', description: `Phòng A503`, note: '' },
  { roomCode: 'A504', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "A" })._id, floor: 5, status: 'available', description: `Phòng A504`, note: '' },
  { roomCode: 'A505', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "A" })._id, floor: 5, status: 'available', description: `Phòng A505`, note: '' },
  { roomCode: 'A506', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "A" })._id, floor: 5, status: 'available', description: `Phòng A506`, note: '' },
  { roomCode: 'A507', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "A" })._id, floor: 5, status: 'available', description: `Phòng A507`, note: '' },
  { roomCode: 'A508', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "A" })._id, floor: 5, status: 'available', description: `Phòng A508`, note: '' },
  { roomCode: 'A509', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "A" })._id, floor: 5, status: 'available', description: `Phòng A509`, note: '' },
  { roomCode: 'A510', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "A" })._id, floor: 5, status: 'available', description: `Phòng A510`, note: '' },
  { roomCode: 'A511', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "A" })._id, floor: 5, status: 'available', description: `Phòng A511`, note: '' },
  { roomCode: 'A512', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "A" })._id, floor: 5, status: 'available', description: `Phòng A512`, note: '' },
  { roomCode: 'A601', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "A" })._id, floor: 6, status: 'available', description: `Phòng A601`, note: 'Phòng VIP' },
  { roomCode: 'A602', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "A" })._id, floor: 6, status: 'available', description: `Phòng A602`, note: 'Phòng VIP' },
  { roomCode: 'A603', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "A" })._id, floor: 6, status: 'available', description: `Phòng A603`, note: 'Phòng VIP' },
  { roomCode: 'A604', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "A" })._id, floor: 6, status: 'available', description: `Phòng A604`, note: 'Phòng VIP' },
  { roomCode: 'A605', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "A" })._id, floor: 6, status: 'available', description: `Phòng A605`, note: 'Phòng VIP' },
  { roomCode: 'A606', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "A" })._id, floor: 6, status: 'available', description: `Phòng A606`, note: 'Phòng VIP' },
  { roomCode: 'A607', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "A" })._id, floor: 6, status: 'available', description: `Phòng A607`, note: 'Phòng VIP' },
  { roomCode: 'A608', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "A" })._id, floor: 6, status: 'available', description: `Phòng A608`, note: 'Phòng VIP' },
  { roomCode: 'A609', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "A" })._id, floor: 6, status: 'available', description: `Phòng A609`, note: 'Phòng VIP' },
  { roomCode: 'A610', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "A" })._id, floor: 6, status: 'available', description: `Phòng A610`, note: 'Phòng VIP' },
  { roomCode: 'A611', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "A" })._id, floor: 6, status: 'available', description: `Phòng A611`, note: 'Phòng VIP' },
  { roomCode: 'A612', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "A" })._id, floor: 6, status: 'available', description: `Phòng A612`, note: 'Phòng VIP' }
]);

db.rooms.insertMany([
  { roomCode: 'B101', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "B" })._id, floor: 1, status: 'available', description: `Phòng B101`, note: '' },
  { roomCode: 'B102', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "B" })._id, floor: 1, status: 'available', description: `Phòng B102`, note: '' },
  { roomCode: 'B103', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "B" })._id, floor: 1, status: 'available', description: `Phòng B103`, note: '' },
  { roomCode: 'B104', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "B" })._id, floor: 1, status: 'available', description: `Phòng B104`, note: '' },
  { roomCode: 'B105', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "B" })._id, floor: 1, status: 'available', description: `Phòng B105`, note: '' },
  { roomCode: 'B106', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "B" })._id, floor: 1, status: 'available', description: `Phòng B106`, note: '' },
  { roomCode: 'B107', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "B" })._id, floor: 1, status: 'available', description: `Phòng B107`, note: '' },
  { roomCode: 'B108', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "B" })._id, floor: 1, status: 'maintenance', description: `Phòng B108`, note: '' },
  { roomCode: 'B201', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "B" })._id, floor: 2, status: 'available', description: `Phòng B201`, note: '' },
  { roomCode: 'B202', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "B" })._id, floor: 2, status: 'available', description: `Phòng B202`, note: '' },
  { roomCode: 'B203', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "B" })._id, floor: 2, status: 'available', description: `Phòng B203`, note: '' },
  { roomCode: 'B204', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "B" })._id, floor: 2, status: 'maintenance', description: `Phòng B204`, note: '' },
  { roomCode: 'B205', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "B" })._id, floor: 2, status: 'available', description: `Phòng B205`, note: '' },
  { roomCode: 'B206', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "B" })._id, floor: 2, status: 'available', description: `Phòng B206`, note: '' },
  { roomCode: 'B207', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "B" })._id, floor: 2, status: 'available', description: `Phòng B207`, note: '' },
  { roomCode: 'B208', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "B" })._id, floor: 2, status: 'available', description: `Phòng B208`, note: '' },
  { roomCode: 'B301', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "B" })._id, floor: 3, status: 'available', description: `Phòng B301`, note: '' },
  { roomCode: 'B302', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "B" })._id, floor: 3, status: 'available', description: `Phòng B302`, note: '' },
  { roomCode: 'B303', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "B" })._id, floor: 3, status: 'available', description: `Phòng B303`, note: '' },
  { roomCode: 'B304', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "B" })._id, floor: 3, status: 'available', description: `Phòng B304`, note: '' },
  { roomCode: 'B305', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "B" })._id, floor: 3, status: 'maintenance', description: `Phòng B305`, note: '' },
  { roomCode: 'B306', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "B" })._id, floor: 3, status: 'available', description: `Phòng B306`, note: '' },
  { roomCode: 'B307', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "B" })._id, floor: 3, status: 'available', description: `Phòng B307`, note: '' },
  { roomCode: 'B308', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "B" })._id, floor: 3, status: 'available', description: `Phòng B308`, note: '' },
  { roomCode: 'B401', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "B" })._id, floor: 4, status: 'available', description: `Phòng B401`, note: 'Phòng VIP' },
  { roomCode: 'B402', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "B" })._id, floor: 4, status: 'available', description: `Phòng B402`, note: 'Phòng VIP' },
  { roomCode: 'B403', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "B" })._id, floor: 4, status: 'available', description: `Phòng B403`, note: 'Phòng VIP' },
  { roomCode: 'B404', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "B" })._id, floor: 4, status: 'available', description: `Phòng B404`, note: 'Phòng VIP' },
  { roomCode: 'B405', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "B" })._id, floor: 4, status: 'available', description: `Phòng B405`, note: 'Phòng VIP' },
  { roomCode: 'B406', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "B" })._id, floor: 4, status: 'available', description: `Phòng B406`, note: 'Phòng VIP' },
  { roomCode: 'B407', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "B" })._id, floor: 4, status: 'available', description: `Phòng B407`, note: 'Phòng VIP' },
  { roomCode: 'B408', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "B" })._id, floor: 4, status: 'available', description: `Phòng B408`, note: 'Phòng VIP' }
]);

db.rooms.insertMany([
  { roomCode: 'C101', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "C" })._id, floor: 1, status: 'available', description: `Phòng C101`, note: '' },
  { roomCode: 'C102', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "C" })._id, floor: 1, status: 'available', description: `Phòng C102`, note: '' },
  { roomCode: 'C103', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "C" })._id, floor: 1, status: 'available', description: `Phòng C103`, note: '' },
  { roomCode: 'C104', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "C" })._id, floor: 1, status: 'available', description: `Phòng C104`, note: '' },
  { roomCode: 'C105', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "C" })._id, floor: 1, status: 'maintenance', description: `Phòng C105`, note: '' },
  { roomCode: 'C106', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "C" })._id, floor: 1, status: 'available', description: `Phòng C106`, note: '' },
  { roomCode: 'C107', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "C" })._id, floor: 1, status: 'available', description: `Phòng C107`, note: '' },
  { roomCode: 'C108', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "C" })._id, floor: 1, status: 'available', description: `Phòng C108`, note: '' },
  { roomCode: 'C201', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "C" })._id, floor: 2, status: 'available', description: `Phòng C201`, note: '' },
  { roomCode: 'C202', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "C" })._id, floor: 2, status: 'available', description: `Phòng C202`, note: '' },
  { roomCode: 'C203', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "C" })._id, floor: 2, status: 'available', description: `Phòng C203`, note: '' },
  { roomCode: 'C204', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "C" })._id, floor: 2, status: 'available', description: `Phòng C204`, note: '' },
  { roomCode: 'C205', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "C" })._id, floor: 2, status: 'available', description: `Phòng C205`, note: '' },
  { roomCode: 'C206', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "C" })._id, floor: 2, status: 'available', description: `Phòng C206`, note: '' },
  { roomCode: 'C207', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "C" })._id, floor: 2, status: 'available', description: `Phòng C207`, note: '' },
  { roomCode: 'C208', price: 450000, type: "single", area: db.areas.findOne({ areaCode: "C" })._id, floor: 2, status: 'available', description: `Phòng C208`, note: '' },
  { roomCode: 'C301', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "C" })._id, floor: 3, status: 'available', description: `Phòng C301`, note: '' },
  { roomCode: 'C302', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "C" })._id, floor: 3, status: 'available', description: `Phòng C302`, note: '' },
  { roomCode: 'C303', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "C" })._id, floor: 3, status: 'available', description: `Phòng C303`, note: '' },
  { roomCode: 'C304', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "C" })._id, floor: 3, status: 'available', description: `Phòng C304`, note: '' },
  { roomCode: 'C305', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "C" })._id, floor: 3, status: 'available', description: `Phòng C305`, note: '' },
  { roomCode: 'C306', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "C" })._id, floor: 3, status: 'available', description: `Phòng C306`, note: '' },
  { roomCode: 'C307', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "C" })._id, floor: 3, status: 'available', description: `Phòng C307`, note: '' },
  { roomCode: 'C308', price: 800000, type: "double", area: db.areas.findOne({ areaCode: "C" })._id, floor: 3, status: 'available', description: `Phòng C308`, note: '' },
  { roomCode: 'C401', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "C" })._id, floor: 4, status: 'available', description: `Phòng C401`, note: 'Phòng VIP' },
  { roomCode: 'C402', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "C" })._id, floor: 4, status: 'available', description: `Phòng C402`, note: 'Phòng VIP' },
  { roomCode: 'C403', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "C" })._id, floor: 4, status: 'available', description: `Phòng C403`, note: 'Phòng VIP' },
  { roomCode: 'C404', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "C" })._id, floor: 4, status: 'available', description: `Phòng C404`, note: 'Phòng VIP' },
  { roomCode: 'C405', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "C" })._id, floor: 4, status: 'available', description: `Phòng C405`, note: 'Phòng VIP' },
  { roomCode: 'C406', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "C" })._id, floor: 4, status: 'available', description: `Phòng C406`, note: 'Phòng VIP' },
  { roomCode: 'C407', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "C" })._id, floor: 4, status: 'maintenance', description: `Phòng C407`, note: 'Phòng VIP' },
  { roomCode: 'C408', price: 1200000, type: "vip", area: db.areas.findOne({ areaCode: "C" })._id, floor: 4, status: 'available', description: `Phòng C408`, note: 'Phòng VIP' }
]);


db.rentals.drop();

const listusers = db.users.find().toArray();
const listrooms = db.rooms.find().toArray();

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomPhone() {
  return "09" + randomInt(10000000, 99999999);
}

function randomIdCard() {
  return String(randomInt(100000000, 999999999));
}

function randomCustomerName() {
  const ho = ["Nguyễn", "Trần", "Lê", "Phạm", "Hoàng", "Đỗ", "Vũ", "Bùi", "Đặng", "Phan", "Lý", "Đoàn", "Hồ", "Ngô", "Dương", "Lưu", "Trịnh", "Tạ", "Vương", "Cao"];
  const ten = ["An", "Bình", "Cường", "Dung", "Hà", "Long", "Lan", "Hải", "Minh", "Huy", "Phong", "Trang", "Tài", "Hiếu", "Mai", "Quân", "Thảo", "Vy", "Quỳnh", "Thành"];
  return randomItem(ho) + " " + randomItem(ten);
}

function createRental(month, year) {
  const startDay = randomInt(1, 25);
  const startDate = new Date(`${year}-${String(month).padStart(2, '0')}-${String(startDay).padStart(2, '0')}T14:00:00`);
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + randomInt(1, 3));

  const room = randomItem(listrooms);
  const user = randomItem(listusers);
  const totalPrice = randomInt(400000, 2000000);
  const isCancelled = Math.random() < 0.1; // 10% cancelled

  return {
    rentalCode: `${year}${String(month).padStart(2, '0')}-${room.roomCode}-` + randomInt(1000, 9999),
    customerName: randomCustomerName(),
    customerIdCard: randomIdCard(),
    customerPhone: randomPhone(),
    startDate,
    endDate,
    room: room._id,
    totalPrice,
    amountPaid: isCancelled ? 0 : totalPrice,
    status: isCancelled ? 'cancelled' : 'completed',
    createdBy: user._id
  };
}

let listRentals = [];

for (let i = 0; i < 8; i++) {
  listRentals.push(createRental(12, 2024));
}

for (let month = 1; month <= 10; month++) {
  const count = randomInt(200, 2000);
  for (let i = 0; i < count; i++) {
    listRentals.push(createRental(month, 2025));
  }
}

function createRentalNov(day) {
  const year = 2025;
  const month = 11;
  const startDate = new Date(`${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T14:00:00`);
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + randomInt(1, 3));

  const room = randomItem(listrooms);
  const user = randomItem(listusers);

  const totalPrice = randomInt(400000, 2000000);
  const isCancelled = Math.random() < 0.1; // 10% cancelled

  return {
    rentalCode: `${year}${String(month).padStart(2, '0')}-${room.roomCode}-` + randomInt(1000, 9999),
    customerName: randomCustomerName(),
    customerIdCard: randomIdCard(),
    customerPhone: randomPhone(),
    startDate,
    endDate,
    room: room._id,
    totalPrice,
    amountPaid: isCancelled ? 0 : totalPrice,
    status: isCancelled ? 'cancelled' : 'completed',
    createdBy: user._id
  };
}

let rentalsNov = [];
for (let day = 1; day <= 3; day++) {
  const count = randomInt(40, 70); // mỗi ngày 40–70 lượt thuê
  for (let i = 0; i < count; i++) {
    rentalsNov.push(createRentalNov(day));
  }
}

db.rentals.insertMany(listRentals);
db.rentals.insertMany(rentalsNov);