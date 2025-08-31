document.getElementById('minato-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const fullname = e.target.fullname.value.trim();
    const email = e.target.email.value.trim();
    const age = e.target.age.value.trim();
    const location = e.target.address.value.trim();
    const description = e.target.personalStatement.value.trim();

    try {
        const response = await fetch('https://minatobackend-ixct.vercel.app/api/v1/submit-form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fullname, email, age, location, description })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Server response:', result);

        if (result.success) {
            // Show success message
            document.getElementById('success-message').style.display = 'block';

            // Reset form
            e.target.reset();

            // Safe reset for optional elements
            const wordCountEl = document.getElementById("word-count");
            if (wordCountEl) wordCountEl.textContent = `Words: 0/300`;

            const acadNameEl = document.querySelector(".display-acad-name");
            if (acadNameEl) acadNameEl.textContent = "";

            const recNameEl = document.querySelector(".display-rec-name");
            if (recNameEl) recNameEl.textContent = "";

        } else {
            console.warn(result.message || 'Something went wrong ');
        }
    } catch (error) {
        console.error('Error submitting form this is already been used :', error);
        alert('Error submitting form this is already been used.');
    }
});


















// document.getElementById('minato-form').addEventListener('submit', async function (e) {
//     e.preventDefault();

//     const fullname = e.target.fullname.value;
//     const email = e.target.email.value;
//     const age = e.target.age.value;
//     const location = e.target.address.value;
//     const description = e.target.personalStatement.value;

//     try {
//       const response = await fetch('http://localhost:8000/api/v1/submit-form', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ fullname, email, age,location, description })
//       });

//       const result = await response.json();

//       if (result.success) {
//         document.getElementById('success-message').style.display = 'block';
//         e.target.reset();
//       } else {
//         alert('Something went wrong: ' + result.message);
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       alert('Error submitting form.');
//     }
//   });






























// // // Word count for textarea
// // const textarea = document.getElementById("lined-textarea");
// // const wordCount = document.getElementById("word-count");

// // textarea.addEventListener("input", () => {
// //   const words = textarea.value.trim().split(/\s+/).filter(Boolean).length;
// //   wordCount.textContent = `Words: ${words}/300`;
// // });

// // // Display selected file names
// // document.getElementById("academic_transcript").addEventListener("change", (e) => {
// //   document.querySelector(".display-acad-name").textContent = e.target.files[0]?.name || "";
// // });

// // document.getElementById("recommendation_letter").addEventListener("change", (e) => {
// //   document.querySelector(".display-rec-name").textContent = e.target.files[0]?.name || "";
// // });

// // document.querySelector("form").addEventListener("submit", async (e) => {
// //   e.preventDefault();

// //   // Get input values
// //   const fullname = document.querySelector('input[name="fullname"]').value.trim();
// //   const age = document.querySelector('input[name="age"]').value.trim();
// //     const email = document.querySelector('input[name="email"]').value.trim();
// //   const address = document.querySelector('input[name="address"]').value.trim();
// //   const personalStatement = document.getElementById("lined-textarea").value.trim();

// //   const academicFile = document.getElementById("academic_transcript").files[0];
// //   const recommendationFile = document.getElementById("recommendation_letter").files[0];

// //   console.log(fullname, age, address, personalStatement,email )
// //   try {
// //     let academicURL = "";
// //     let recommendationURL = "";

// //     // // Upload picture (academic transcript field renamed for picture)
// //     // if (academicFile) {
// //     //   const picRef = storage.ref(`profile_pictures/${academicFile.name}`);
// //     //   await picRef.put(academicFile);
// //     //   academicURL = await picRef.getDownloadURL();
// //     // }

// //     // // Upload recommendation letter
// //     // if (recommendationFile) {
// //     //   const recRef = storage.ref(`recommendations/${recommendationFile.name}`);
// //     //   await recRef.put(recommendationFile);
// //     //   recommendationURL = await recRef.getDownloadURL();
// //     // }

// //     // Save data in Firestore
// //     // await db.collection("applications").add({
// //     //   fullname,
// //     //   age,
// //     //   address,
// //     //   personalStatement,
// //     //   picture: academicURL,
// //     //   recommendationLetter: recommendationURL,
// //     //   createdAt: new Date()
// //     // });

// //     // alert("Form submitted successfully!");
// //     // e.target.reset();
// //     console.log('try ')
// //     document.querySelector(".display-acad-name").textContent = "";
// //     document.querySelector(".display-rec-name").textContent = "";

// //   } catch (error) {
// //     console.log('error from try ')
// //     console.error("Error submitting form:", error);
// //     alert("Something went wrong!");
// //   }
// // });
