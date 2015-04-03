#include <LiquidCrystal.h>

LiquidCrystal lcd(7,8,9,10,11,12);

void setup() {
 
  Serial.begin(9600);
  
int sensor = 2;
pinMode(sensor,INPUT);

lcd.begin(16,2);
lcd.print("Hello World!");
delay(2000);
}

void loop() {
  
  int sensor = 2;
  
if (digitalRead(sensor) == HIGH) 
{
  Serial.write(1);
  lcd.print("Occupied!");
  delay(500);
}
else
{
  Serial.write(0);
  
  lcd.print("Available");
  delay(500);
}

  lcd.clear();
  delay(2000);
  
}
