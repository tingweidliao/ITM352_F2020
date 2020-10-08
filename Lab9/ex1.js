date = "11/24/1993"
month = 11;
day = 24;
year = 1993;

step1 = 93;
step2 = parseInt(step1/4);
step3 = step2 + step1; // 23 + 93 = 116
step4 = 3; // not Jan, so month before Nov = Oct; 3. 
step6 = step4 + step3;
step7 = step6 + 24;
step8 = step7/7;
step8 = step7%7;
