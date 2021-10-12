function formValidation() {
    // validate name
    if (document.querySelector("#nama").value == "") {
        alert("Silahkan isi nama anda!");
        document.querySelector("#nama").focus();
        return false;
    } else {
        const format = /[`0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (format.test(document.querySelector("#nama").value)) {
            alert("Nama hanya boleh berisi alfabet");
            document.querySelector("#nama").focus();
            return false;
        }
    }
  
    // validate nrp
    if (document.querySelector("#nrp").value == "") {
        alert("Silahkan isi nrp anda!");
        document.querySelector("#nrp").focus();
        return false;
    } else {
        if (!/^[0-9]+$/.test(document.querySelector("#nrp").value)) {
            alert("NRP harus angka");
            document.querySelector("#nrp").focus();
            return false;
        }
    }
  
    // validate email
    if (document.querySelector("#email").value == "") {
        alert("Silahkan isi email anda!");
        document.querySelector("#email").focus();
        return false;
    }

    // validate matkul
    if (document.querySelector("#matkul").value == "0") {
        alert("Silahkan pilih asal mata kuliah anda!");
        document.querySelector("#matkul").focus();
        return false;
    }
  
    // validate statusVaksin
    if (document.querySelector("#statusVaksin").value == "0") {
        alert("Silahkan pilih status vaksin anda!");
        document.querySelector("#statusVaksin").focus();
        return false;
    }
  
    if (
        (document.querySelector("#statusVaksin").value == "sudah_vaksin_1" ||
            document.querySelector("#statusVaksin").value ==
                "sudah_vaksin_2") &&
        trimfield(document.getElementById("formFile1").value) == ""
    ) {
        alert("Upload file sertifikat vaksin anda yang pertama!");
        document.querySelector("#statusVaksin").focus();
        return false;
    }
  
    if (
        document.querySelector("#statusVaksin").value == "3" &&
        trimfield(document.getElementById("formFile2").value) == ""
    ) {
        alert("Upload file sertifikat vaksin anda yang kedua!");
        document.querySelector("#statusVaksin").focus();
        return false;
    }
  
    Swal.fire({
        title: "Are you sure?",
        text: "You can not change your input after submitting the form!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, submit!",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Success!",
                text: "Your data has been saved",
                icon: "success",
                confirmButtonColor: "#3085d6",
            });
            document.form.reset();
            document.getElementById("vaccination").style.display = "none";
            document.getElementById("vaccinationCertif-1").style.display =
                "none";
            document.getElementById("vaccinationCertif-2").style.display =
                "none";
        }
    });
    return false;
  }
  
  function checkVacccinationStatus() {
    const optionStatusVaksin = document.querySelector("#statusVaksin");
    const statusVaksin = optionStatusVaksin.value;
    // console.log(statusVaksin);
    if (statusVaksin == "0") {
        document.querySelector("#vaccination").style.display = "none";
        document.querySelector("#vaccinationCertif-1").style.display = "none";
        document.querySelector("#vaccinationCertif-2").style.display = "none";
    } else if (statusVaksin == "belum_vaksin") {
        document.querySelector("#vaccination").style.display = "none";
        document.querySelector("#vaccinationCertif-1").style.display = "none";
        document.querySelector("#vaccinationCertif-2").style.display = "none";
    } else if (statusVaksin == "sudah_vaksin_1") {
        document.querySelector("#vaccination").style.display = "block";
        document.querySelector("#vaccinationCertif-1").style.display = "block";
        document.querySelector("#vaccinationCertif-2").style.display = "none";
    } else if (statusVaksin == "sudah_vaksin_2") {
        document.querySelector("#vaccination").style.display = "block";
        document.querySelector("#vaccinationCertif-1").style.display = "block";
        document.querySelector("#vaccinationCertif-2").style.display = "block";
    }
  }
  
  function validateFileupload(fileName) {
    var allowed_extensions = new Array("jpg", "png", "pdf");
    var file_extension = fileName.split(".").pop().toLowerCase(); // split function will split the filename by dot(.), and pop function will pop the last element from the array which will give you the extension as well. If there will be no extension then it will return the filename.
  
    for (var i = 0; i <= allowed_extensions.length; i++) {
        if (allowed_extensions[i] == file_extension) {
            return true; // valid file extension
        }
    }
    alert("File sertifikat harus jpg, png, atau pdf !");
    return false;
  }
  
  function trimfield(str) {
    return str.replace(/^\s+|\s+$/g, "");
  }