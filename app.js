// Word count for textarea
const textarea = document.getElementById("lined-textarea");
const wordCount = document.getElementById("word-count");

textarea.addEventListener("input", () => {
  const words = textarea.value.trim().split(/\s+/).filter(Boolean).length;
  wordCount.textContent = `Words: ${words}/300`;
});

// Display selected file names
document.getElementById("academic_transcript").addEventListener("change", (e) => {
  document.querySelector(".display-acad-name").textContent = e.target.files[0]?.name || "";
});

document.getElementById("recommendation_letter").addEventListener("change", (e) => {
  document.querySelector(".display-rec-name").textContent = e.target.files[0]?.name || "";
});

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get input values
  const fullname = document.querySelector('input[name="fullname"]').value.trim();
  const age = document.querySelector('input[name="age"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
  const address = document.querySelector('input[name="address"]').value.trim();
  const personalStatement = document.getElementById("lined-textarea").value.trim();

  const academicFile = document.getElementById("academic_transcript").files[0];
  const recommendationFile = document.getElementById("recommendation_letter").files[0];


  console.log(fullname, age, address, personalStatement,email )
  try {
    let academicURL = "";
    let recommendationURL = "";

    // // Upload picture (academic transcript field renamed for picture)
    // if (academicFile) {
    //   const picRef = storage.ref(`profile_pictures/${academicFile.name}`);
    //   await picRef.put(academicFile);
    //   academicURL = await picRef.getDownloadURL();
    // }

    // // Upload recommendation letter
    // if (recommendationFile) {
    //   const recRef = storage.ref(`recommendations/${recommendationFile.name}`);
    //   await recRef.put(recommendationFile);
    //   recommendationURL = await recRef.getDownloadURL();
    // }

    // Save data in Firestore
    // await db.collection("applications").add({
    //   fullname,
    //   age,
    //   address,
    //   personalStatement,
    //   picture: academicURL,
    //   recommendationLetter: recommendationURL,
    //   createdAt: new Date()
    // });

    // alert("Form submitted successfully!");
    // e.target.reset();
    console.log('try ')
    document.querySelector(".display-acad-name").textContent = "";
    document.querySelector(".display-rec-name").textContent = "";

  } catch (error) {
    console.log('error from try ')
    console.error("Error submitting form:", error);
    alert("Something went wrong!");
  }
});
