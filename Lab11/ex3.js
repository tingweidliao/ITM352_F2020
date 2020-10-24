attributes = "David;26;26.5;-25.5"
var pieces = attributes.split (';')
for(i=0; i<pieces.length; i++) {
    console.log(pieces[i]);
}

attributes = "David;26;26.5;-25.5"
var pieces = attributes.split (';')
for(i=0; i<pieces.length; i++) {
    console.log(pieces[i], typeof pieces [i]); }
    console.log(pieces.join('+'));