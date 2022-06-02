// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

// Add new variables for easier code reading

firstUserEducation= 
new Set([new Map([["name", "SD 01"],["city","Jakarta"],["graduate",2016]]), 
new Map([["name", "SMP 02"],["city","Jakarta"],["graduate",2019]]),
new Map([["name", "SMA 03"],["city","Tangerang"]])]);

firstUserFavColor= new Set(['Yellow', 'Pink', 'White', 'Purple']);
firstUserFavColorArray= Array.from(firstUserFavColor);

firstUserFavRestaurant=
new Set(['Bento','Sushi','Pancake','Eggy','Tempura','Bento','Eggy','Padang','Tteok','Sushi','Sushi']);
firstUserFavRestaurantArray= Array.from(firstUserFavRestaurant);

secondUserEducation= 
new Set([new Map([["name", "SD 02"],["city","Jakarta"],["graduate",2010]]), 
new Map([["name", "SMP 03"],["city","Bogor"],["graduate",2013]]),
new Map([["name", "SMA 01"],["city","Surabaya"],["graduate",2016]])]);

secondUserFavColor= new Set(['Blue','Black','Gray']);
secondUserFavColorArray= Array.from(secondUserFavColor);

secondUserFavRestaurant= new Set(['Tempura','Bento','Sushi','Pancake','Padang','Katsu','Geprek','Pancake','Eggy']);
secondUserFavRestaurantArray= Array.from(secondUserFavRestaurant);

const firstUser = {
    name:"Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: firstUserFavColorArray,
    isHavePet: "Yes",
    education: firstUserEducation ,
    favoriteRestaurant: firstUserFavRestaurantArray
};
const secondUser = {
    name:"Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: secondUserFavColorArray,
    isHavePet: "No",
    education: secondUserEducation,
    favoriteRestaurant: secondUserFavRestaurantArray
};


// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};