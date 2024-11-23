const emails = [
  "test.email+alex@leetcode.com",
  "test.email.leet+alex@code.com",
];

/**
 * @param {string[]} emails
 * @return {number}
 */

var getUniqueEmail = (email) => {
  const partedEmail = email.split("@");
  let localName = partedEmail[0];
  let domainName = partedEmail[1];
  let filteredLocalName = "";
  for (let i = 0; i < localName.length; i++) {
    if (localName[i] === "+") break;
    else if (localName[i] !== ".") filteredLocalName += localName[i];
    else continue;
  }
  return filteredLocalName + "@" + domainName;
};
var numUniqueEmails = function (emails) {
  const map = new Map();
  for (let i = 0; i < emails.length; i++) {
    let email = getUniqueEmail(emails[i]);

    if (!map.has(email)) {
      map.set(email, 1);
    }
  }
  return map.size;
};

console.log(numUniqueEmails(emails));
