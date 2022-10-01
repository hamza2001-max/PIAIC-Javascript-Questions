const make_album = (artistName, artistAlbum) => {
    return albumobj = {
        aritist: artistName,
        album: artistAlbum
    }
}

const obj = make_album("hamza", "album");
const obj1 = make_album("john", "album");
const obj2 = make_album("jose", "album");
console.log(obj);
console.log(obj1.aritist + " " + obj.album);
console.log(obj2.aritist + " " + obj.album);