home = document.getElementById("btn-home");
life = document.getElementById("btn-life");
pres = document.getElementById("btn-pres");
info = document.getElementById("info");

life.onclick = (
	() => info.innerHTML = "Trump was born and raised in Queens, a borough of New York City, and received a bachelor's degree in economics from the Wharton School. He took charge of his family's real-estate business in 1971, renamed it The Trump Organization, and expanded its operations from Queens and Brooklyn into Manhattan. The company built or renovated skyscrapers, hotels, casinos, and golf courses. Trump later started various side ventures, mostly by licensing his name. He produced and hosted The Apprentice, a reality television series, from 2003 to 2015. As of 2020, Forbes estimated his net worth to be $2.1 billion."
)

home.onclick = (
	() => info.innerHTML = "Donald John Trump (born June 14, 1946) is the 45th and current president of the United States. Before entering politics, he was a businessman and television personality. He is the chairman and president of The Trump Organization, which is the principal holding company for his real estate ventures and other business interests. During his career, Trump has built office towers, hotels, casinos, golf courses, an urban development project in Manhattan, and other branded facilities worldwide."
)

pres.onclick = (
	() => info.innerHTML = "Trump entered the 2016 presidential race as a Republican and defeated 16 other candidates in the primaries. His political positions have been described as populist, protectionist, and nationalist. Despite not being favored in most forecasts, he was elected over Democratic nominee Hillary Clinton, although he lost the popular vote. He became the oldest first-term U.S. president,[b] and the first without prior military or government service. His election and policies have sparked numerous protests. Trump has made many false or misleading statements during his campaign and presidency. The statements have been documented by fact-checkers, and the media have widely described the phenomenon as unprecedented in American politics. Many of his comments and actions have been characterized as racially charged or racist."
)
