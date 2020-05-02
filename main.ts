//% color="#8FBC8F" weight=21 icon="\uf001"
namespace SmartHome {

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

    export enum enMusic {

        JingleBell = 1,
        Chang = 2,
        JaneNoonBow = 3,
        Wipwup = 4,
        BabyShark = 5
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

    //% blockId=smarthomeTouchkey block="KeyBoard Touch Return|value %value"
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

    //% blockId=smarthomeMusic block="Music|%index"

    export function Music(index: enMusic): void {
        switch (index) {
            case enMusic.JingleBell: music.beginMelody(["e", "e", "e", "", "e", "e", "e", "", "e", "g", "c", "d", "e", "", "", "", "f", "f", "f", "", "e", "e", "e", "", "e", "d", "d", "e", "d", "", "g"], MelodyOptions.Once); break;
            case enMusic.Chang: music.beginMelody(["g", "g", "g", "g", "g", "", "", "g", "e", "d", "g", "g", "c", "", "", "g", "e", "d", "e", "c", "d:5", "c:3", "g3:4", "a3", "c4", "a3:3", "g3:4", "c4:6", "c:3", "g3:4", "a3", "c4", "a3:3", "g3:4", "c4:6", "g:3", "a:4", "g:3", "e:7", "d:7", "c:10", ""], MelodyOptions.Once); break;
            case enMusic.JaneNoonBow: music.beginMelody(["ab:10", "ab:4", "", "", "", "ab:10", "ab:4", "", "", "", "ab:6", "c5:6", "bb4", "bb:3", "ab", "bb", "bb:1", "bb:2", "f:3", "eb", "f:7"], MelodyOptions.Once); break;
            case enMusic.Wipwup: music.beginMelody(["c5:6", "bb4:5", "d5:3", ":2", "d5:3", ":2", "d5:3", ":2", "d5:3", ":2", "d5:3", ":7", "c5:5", "d5:5", "bb4:3", ":2", "bb4:3", ":2", "bb4:3", ":2", "bb4:3", ":2", "bb4:3", ":2", "bb4:5", "bb4:5", "g4:5", "bb4:5", "g4:5", "bb4:8", ":6", "bb4:3", "bb4:2", "c5:5", "bb4:5", "c5:3", ":2", "c5:3", ":2", "c5:3", ":2", "c5:3", ":2", "c5:3"], MelodyOptions.Once); break;
            case enMusic.BabyShark: music.beginMelody(["d5:6", "e", "g:3", "g:3", "g:3", "g:2", "g:2", ":1", "g:2", "g:3", "d5:3", "e", "g:3", "g:3", "g:3", "g:2", "g:2", ":1", "g:2", "g:3", "d5:3", "e", "g:3", "g:3", "g:3", "g:2", "g:2", ":1", "g:2", "g:3", "g:3", "g:3", "gb"], MelodyOptions.Once); break;
        }
    }


}
