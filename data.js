const nama = "Arcana";
let umur = 17;
function generateBiodata( ) {
	let generasi;
	if(umur<=17 && umur >10){
		console.log('anda remaja');
		generasi='generasi remaja';
		}
		else if(umur>17 && umur<30 ) {
			console.log('anda dewasa');
			generasi='generasi dewasa';
			}
		else if(umur>30) {
				console.log('lu dah tua blok');
				generasi='generasi tua';
				}
		else if(umur<10 && umur>0){ 
			console.log('lu anak kecil jingan');
			generasi='generasi kecil';
			}
 else {
			console.log('lu mahkluk apaan jingaan');
			generasi='generasi kntl';
			}
			return console.log('generasi lu itu',generasi);
	}
console.log(nama);
console.log(umur);
generateBiodata();
