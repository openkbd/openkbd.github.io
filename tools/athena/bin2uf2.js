$(function () {
    var qgf_raw;
    const RP2040_FAMILY_ID = 0xe48bff56;

    $("#file-upload").change(function (ev) {
        // called after choosing file
        var f = ev.target.files[0];
        if (!f) {
            return;
        }

        var fr = new FileReader();
        fr.readAsBinaryString(f);
        fr.onloadend = function (e) {
            qgf_raw = binstr2buf(this.result);
        }
    });

    //之后再重写这部分
    $("#gif-0").on('click', function () {
        var result = bin_to_uf2(qgf_raw, 0x10400000, RP2040_FAMILY_ID);
        var blob = new Blob([result], { type: "application/octet-stream" });
        saveAs(blob, "gif0_capslock.uf2")
    })
    $("#gif-1").on('click', function () {
        var result = bin_to_uf2(qgf_raw, 0x10500000, RP2040_FAMILY_ID);
        var blob = new Blob([result], { type: "application/octet-stream" });
        saveAs(blob, "gif1_typing.uf2")
    })
    $("#gif-2").on('click', function () {
        var result = bin_to_uf2(qgf_raw, 0x10600000, RP2040_FAMILY_ID);
        var blob = new Blob([result], { type: "application/octet-stream" });
        saveAs(blob, "gif2.uf2")
    })
    $("#gif-3").on('click', function () {
        var result = bin_to_uf2(qgf_raw, 0x10800000, RP2040_FAMILY_ID);
        var blob = new Blob([result], { type: "application/octet-stream" });
        saveAs(blob, "gif3.uf2")
    })
    $("#gif-4").on('click', function () {
        var result = bin_to_uf2(qgf_raw, 0x10A00000, RP2040_FAMILY_ID);
        var blob = new Blob([result], { type: "application/octet-stream" });
        saveAs(blob, "gif4.uf2")
    })
    $("#gif-5").on('click', function () {
        var result = bin_to_uf2(qgf_raw, 0x10C00000, RP2040_FAMILY_ID);
        var blob = new Blob([result], { type: "application/octet-stream" });
        saveAs(blob, "gif5.uf2")
    })

    function binstr2buf(binstr) {
        var buf = new Uint8Array(binstr.length);
        for (var i = 0; i < binstr.length; i++) {
            buf[i] = binstr[i].charCodeAt(0);
        }
        return buf;
    }

    function bin_to_uf2(buf, APP_START_ADDRESS, UF2_Family_ID) {
        const UF2_MAGIC_START0 = 0x0A324655 // "UF2\n"
        const UF2_MAGIC_START1 = 0x9E5D5157 // Randomly selected
        const UF2_MAGIC_END = 0x0AB16F30   // Ditto
        var numBlocks = (buf.length + 255) >> 8
        var outp = []
        for (var pos = 0; pos < buf.length; pos += 256) {
            var buffer  = new ArrayBuffer(512)
            var bl = new DataView(buffer);
            for (var i = 0; i < 512; i++) {
                bl[i] = 0 // just in case
            }
            bl.setUint32(0, UF2_MAGIC_START0, true);  //First magic number, 0x0A324655 ("UF2\n")
            bl.setUint32(4, UF2_MAGIC_START1, true);  //Second magic number, 0x9E5D5157
            bl.setUint32(8, 0x00002000, true);  //Flags: 0x00002000 - familyID present 
            bl.setUint32(12, APP_START_ADDRESS + pos, true)  //Address in flash where the data should be written
            bl.setUint32(16, 256, true);  //Number of bytes used in data (often 256)
            bl.setUint32(20, outp.length/512, true); // Sequential block number; starts at 0
            bl.setUint32(24, numBlocks, true); //Total number of blocks in file
            bl.setUint32(28, UF2_Family_ID, true); //File size or board family ID or zero
            for (var i = 0; i < 256; ++i) {
                bl.setUint8(i + 32, buf[pos + i])
            }
            bl.setUint32(512 - 4, UF2_MAGIC_END, true);  //Final magic number, 0x0AB16F30
            for (var i=0; i<512; i++) {
                outp.push(bl.getUint8(i));
            }
        }
        return (new Uint8Array(outp));
    }
})
