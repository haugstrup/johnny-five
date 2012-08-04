var five = require("../lib/johnny-five"),
    board, lcd;

board = new five.Board();

board.on("ready", function() {

  lcd = new five.LCD({
    // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
    // Arduino pin # 7    8   9   10  11  12
    pins: [ 7, 8, 9, 10, 11, 12 ],
  });

  lcd.on("ready", function() {
    // Expirimental useChar API
    // Predefined characters:
    //
    // bell, note, clock, heart, duck,
    // check, cross, retarrow


    lcd.useChar("bell");
    lcd.useChar("clock");
    lcd.useChar("check");
    lcd.useChar("duck");


    lcd.clear().print(":clock: :duck: :check: :bell:");
  });
});
