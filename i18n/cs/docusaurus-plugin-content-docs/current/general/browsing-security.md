---
title: Browsing Security
sidebar_position: 3
---

Every day, tens of thousands of people fall prey to virus attacks or fraud on the Internet. We have added special filters to the AdGuard app to protect you from malicious and phishing websites.

So far, we have categorized more than 15 million sites, and our filters contain about 1.5 million phishing and malware sites. Just think about it: 10% of all known sites can be dangerous for you! Inexperienced users can easily become victims of fraudsters or hackers. We hope that using protection against malicious websites will help you avoid all hazards that you may encounter.

## How does a check work?

The scope and methods of checks depend on the product you use. In our browser extensions, AdGuard inspects only the pages you visit. In AdGuard for Windows, Mac, or Android, we offer you the best possible protection by checking both the pages and all objects loaded on them.

### AdGuard for Windows, Mac, and Android

We use the protocol [Safe Browsing API version 2.2](https://code.google.com/p/google-safe-browsing/wiki/Protocolv2Spec) for our work with filters. This protocol allows us to keep your personal data absolutely safe. Our server knows nothing about the websites that you visit. We use hash prefixes for checks, not the opened URLs.

The figure below provides a general understanding of how the Browsing Security module works, using AdGuard for Windows as an example.

![Functioning algorithm of Browsing Security module](https://images.adguard.com/public/Adguard/En/Articles/safebrowsing_adguard_for_windows.png)

### AdGuard Browser extensions

Browser extensions work differently, using the so-called [_Lookup API_](https://github.com/AdguardTeam/AdguardForAndroid/issues/162#issue-115487668) to check the pages you visit. Every time you visit any website, your local client exchanges information with our backend server in the form of hashes and hash prefixes. For those interested in the process at a deeper level, the link above will be helpful. As a result of that exchange, the local client determines if the website belongs to the database of potentially dangerous websites or not.

We bring to your attention that we never get any information that could allow us to determine which websites you visit and use that data in any way.

An approximate algorithm of the functioning of the Browsing Security module is shown in the picture below.

![Functioning algorithm of Browsing Security module in AdGuard browser extensions.](https://images.adguard.com/public/Adguard/En/Articles/safebrowsing_extension.png)

## AdGuard filters

We currently maintain two AdGuard filters. One protects against phishing and fraudulent websites. The other protects against malicious websites, visiting which may lead to a virus infection.

### Phishing sites filter

_Phishing_ is a type of online fraud aimed at gaining access to confidential data of users — username and password. If you are interested in this topic, we suggest that you read [this article at Wikipedia](http://en.wikipedia.org/wiki/Phishing).

Apart from phishing sites, this filter also covers different fraudulent sites, including all kinds of scams, sales of nonexistent content, and such.

### Malicious sites filter

This filter contains links to pages that lead to the execution of malicious code. It can initiate leakage or loss of data or harm the device of a user. It can be authorized (for example, when downloading and running the executable file) or unauthorized (for example, when being attacked with spyware).

## How do we fill up our filters?

Our filters are constantly filled with new addresses. Since most of the work is automated, you can be sure that new malware and phishing addresses fall into our database as quickly as possible.

### AdGuard Browsing Security Community

An important tool for maintaining the highest level of filtering is _AdGuard Browsing Security Community_. Any user of our products — be it AdGuard for Windows or our browser extension — can become a member of the community and help us in the making of AdGuard filters.

In the picture below we described an algorithm of Browsing Security Community work:

![The way AdGuard Browsing Security Community works](https://images.adguard.com/public/Adguard/En/Articles/browsing_security_community.png)

### Want to help?

We will gladly accept any help! If you want to send us a complaint about a phishing or malware site, you can do it via technical support at **support@adguard.com** or [on our forum](http://forum.adguard.com/).

### False-positive responses

Occasionally, some non-malicious websites get added to AdGuard's filters. We do our best to reduce the percentage of false positives, but they still occur. If you come across this behavior from AdGuard, please send us a complaint about the false-positive alarm. You can submit such complaints via our technical support at **support@adguard.com** or on [our forum](http://forum.adguard.com/).