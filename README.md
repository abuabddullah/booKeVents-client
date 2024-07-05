# Project Summary

- home পেইজে সকল events গুলো আনা হয়েছে যেখানে থেকে see details করা যায়
- see details page এ পাঁশে এই event এর যত গুলো cadidate আছে তাদের লিস্ট পাও্যা যায়
- book now এ click করলে নতুন করে booking page না এনে এখানেই modal এ confirm booking করা যায়
- free থাকলে আর pay করার option নাই তবে paid হইলে confirm booking করর পর payment পেজ এ নিয়ে যাবে যেখানে গিয়ে payment করা যাবে
- পেমেন্ট হয়ে গেলে বা কোণ ভাবে db তে isPaid true হলে তা my events এ যোগ হবে

# Scopes for development

- add more APIs for Crud
- add event by user
- edit booked event by user
- reject user by admin [bann user]
- edit event by admin
- cancel booking by delete booking
- registration by email-pass এর সময় user name db তে set হচ্ছে না
- multiple event payment by selecting at a time by user
- multiple payment taking need to handle
- used force reload at **_booKeVents-client\src\components\maniLayout\eventDetails\ConfirmBookingModal.jsx_**

## link replacement

- frontend :
- - local : http://localhost:5173/
- - live : https://boo-ke-vents.netlify.app/

- backend :
- - local : http://localhost:5000/
- - server : https://bookevents-server.onrender.com/
