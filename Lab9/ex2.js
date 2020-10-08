var x = true;

while (x == true) {
controller.move();
if (controller.move()
== false) {

controller.rotate();
continue; 
}
}
    