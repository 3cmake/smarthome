//% color="#8FBC8F" weight=21 icon="\uf001"
namespace CrocoKit {

    let key_state = 0;
    let old_key = 0;
    let button_state = 0;
    let old_button = 0;
    let key_state_1 = 0;
    let old_key_1 = 0;

    export enum enMusic {
        dadadum = 0,
        entertainer,
        prelude,
        ode,
        nyan,
        ringtone,
        funk,
        blues,
        birthday,
        wedding,
        funereal,
        punchline,
        baddy,
        chase,
        ba_ding,
        wawawawaa,
        jump_up,
        jump_down,
        power_up,
        power_down
    }

    export enum touch_pin {
        None = 0,
        P2 = 2,
        P5 = 5,
        P8 = 8,
        P11 = 11,
        P12 = 12,
        P13 = 13,
        P14 = 14,
        P15 = 15
    }

    export enum touch {
        //% blockId="None" block="None"
        None = 0x0000,
        //% blockId="C" block="C"
        C = 0x0001,
        //% blockId="D" block="D"
        D = 0x0002,
        //% blockId="E" block="E"
        E = 0x0004,
        //% blockId="F" block="F"
        F = 0x0008,
        //% blockId="G" block="G"
        G = 0x0010,
        //% blockId="A" block="A"
        A = 0x0020,
        //% blockId="B" block="B"
        B = 0x0040,
        //% blockId="CH" block="CH"
        CH = 0x0080,
    }

}
//% blockId=CrocoKit_KeyBoard_Touch block="KeyBoard Touch Return|value %value"
//% weight=94
//% blockGap=20 
//% color="#8FBC8F"
//% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
export function KeyBoard_Touch(value: touch_pin): boolean {
    let a = 0;
    let b = 0;
    let c = 0;
    let temp = 0;
    pins.i2cWriteNumber(0x50, 8, NumberFormat.UInt8BE, false);
    a = pins.i2cReadNumber(0x50, NumberFormat.UInt8BE, true);
    b = pins.i2cReadNumber(0x50, NumberFormat.UInt8BE, false);
    c = (b << 8) | a;
    if ((c & temp) != 0) {
        c = c & temp;
    } else {
        switch (value) {
            case touch_pin.None:
                return (c & touch.None) == 0;
                break;
            case touch_pin.P2:
                return (c & touch.C) == 0x0001;
                break;
            case touch_pin.P5:
                return (c & touch.D) == 0x0002;
                break;
            case touch_pin.P8:
                return (c & touch.E) == 0x0004;
                break;
            case touch_pin.P11:
                return (c & touch.F) == 0x0008;
                break;
            case touch_pin.P12:
                return (c & touch.G) == 0x0010;
                break;
            case touch_pin.P13:
                return (c & touch.A) == 0x0020;
                break;
            case touch_pin.P14:
                return (c & touch.B) == 0x0040;
                break;
            case touch_pin.P15:
                return (c & touch.CH) == 0x0080;
                break;
            default:
                break;
        }
    }
    return false;
}