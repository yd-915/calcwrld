// Generated from LatexLexer.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,64,642,6,-1,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,
7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,
2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,
19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,
7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,
33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,
2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,
48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,
7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,
62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,1,0,1,0,1,
0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,
8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,
11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,
1,13,1,13,1,14,1,14,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,17,1,17,1,
17,1,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,21,
1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,23,1,
23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,
1,25,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,
29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,
1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,34,1,
34,1,35,1,35,1,36,1,36,1,37,1,37,1,38,1,38,1,39,1,39,1,39,1,39,1,40,1,40,
1,40,1,40,1,41,1,41,1,42,4,42,313,8,42,11,42,12,42,314,1,42,1,42,5,42,319,
8,42,10,42,12,42,322,9,42,1,42,3,42,325,8,42,1,42,1,42,4,42,329,8,42,11,
42,12,42,330,1,42,3,42,334,8,42,1,42,4,42,337,8,42,11,42,12,42,338,1,42,
3,42,342,8,42,3,42,344,8,42,1,43,1,43,1,44,1,44,5,44,350,8,44,10,44,12,44,
353,9,44,1,45,1,45,3,45,357,8,45,1,45,4,45,360,8,45,11,45,12,45,361,1,46,
1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,
46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,
1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,
46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,
1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,
46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,
1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,
46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,
1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,
46,1,46,1,46,1,46,1,46,1,46,1,46,3,46,502,8,46,1,47,1,47,3,47,506,8,47,1,
47,1,47,1,47,1,47,1,47,4,47,513,8,47,11,47,12,47,514,3,47,517,8,47,1,47,
1,47,3,47,521,8,47,1,48,4,48,524,8,48,11,48,12,48,525,1,48,1,48,1,49,1,49,
1,49,1,49,1,49,1,50,1,50,1,51,1,51,1,51,1,51,1,52,1,52,1,52,1,52,1,52,1,
52,1,53,1,53,1,53,1,53,1,53,1,53,1,54,1,54,1,54,1,54,1,54,1,54,1,55,1,55,
1,56,4,56,562,8,56,11,56,12,56,563,1,57,1,57,1,58,1,58,1,59,1,59,1,60,1,
60,1,61,1,61,1,62,3,62,577,8,62,1,62,4,62,580,8,62,11,62,12,62,581,1,62,
1,62,5,62,586,8,62,10,62,12,62,589,9,62,1,62,3,62,592,8,62,1,62,1,62,4,62,
596,8,62,11,62,12,62,597,1,62,3,62,601,8,62,1,62,4,62,604,8,62,11,62,12,
62,605,3,62,608,8,62,1,63,1,63,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,
65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,66,4,66,630,8,66,11,66,12,66,
631,1,66,1,66,1,67,1,67,1,67,1,67,1,67,1,68,1,68,0,0,69,2,1,4,2,6,3,8,4,
10,5,12,6,14,7,16,8,18,9,20,10,22,11,24,12,26,13,28,14,30,15,32,16,34,17,
36,18,38,19,40,20,42,21,44,22,46,23,48,24,50,25,52,26,54,27,56,28,58,29,
60,30,62,31,64,32,66,33,68,34,70,35,72,36,74,37,76,38,78,39,80,40,82,41,
84,42,86,43,88,0,90,0,92,0,94,0,96,44,98,45,100,46,102,47,104,48,106,49,
108,50,110,51,112,52,114,53,116,54,118,55,120,56,122,57,124,58,126,59,128,
0,130,60,132,61,134,62,136,63,138,64,2,0,1,6,1,0,48,57,2,0,65,90,97,122,
3,0,48,57,65,90,97,122,2,0,69,69,101,101,2,0,43,43,45,45,3,0,9,10,13,13,
32,32,694,0,2,1,0,0,0,0,4,1,0,0,0,0,6,1,0,0,0,0,8,1,0,0,0,0,10,1,0,0,0,0,
12,1,0,0,0,0,14,1,0,0,0,0,16,1,0,0,0,0,18,1,0,0,0,0,20,1,0,0,0,0,22,1,0,
0,0,0,24,1,0,0,0,0,26,1,0,0,0,0,28,1,0,0,0,0,30,1,0,0,0,0,32,1,0,0,0,0,34,
1,0,0,0,0,36,1,0,0,0,0,38,1,0,0,0,0,40,1,0,0,0,0,42,1,0,0,0,0,44,1,0,0,0,
0,46,1,0,0,0,0,48,1,0,0,0,0,50,1,0,0,0,0,52,1,0,0,0,0,54,1,0,0,0,0,56,1,
0,0,0,0,58,1,0,0,0,0,60,1,0,0,0,0,62,1,0,0,0,0,64,1,0,0,0,0,66,1,0,0,0,0,
68,1,0,0,0,0,70,1,0,0,0,0,72,1,0,0,0,0,74,1,0,0,0,0,76,1,0,0,0,0,78,1,0,
0,0,0,80,1,0,0,0,0,82,1,0,0,0,0,84,1,0,0,0,0,86,1,0,0,0,0,96,1,0,0,0,0,98,
1,0,0,0,0,100,1,0,0,0,0,102,1,0,0,0,1,104,1,0,0,0,1,106,1,0,0,0,1,108,1,
0,0,0,1,110,1,0,0,0,1,112,1,0,0,0,1,114,1,0,0,0,1,116,1,0,0,0,1,118,1,0,
0,0,1,120,1,0,0,0,1,122,1,0,0,0,1,124,1,0,0,0,1,126,1,0,0,0,1,130,1,0,0,
0,1,132,1,0,0,0,1,134,1,0,0,0,1,136,1,0,0,0,1,138,1,0,0,0,2,140,1,0,0,0,
4,144,1,0,0,0,6,146,1,0,0,0,8,148,1,0,0,0,10,150,1,0,0,0,12,152,1,0,0,0,
14,154,1,0,0,0,16,156,1,0,0,0,18,158,1,0,0,0,20,162,1,0,0,0,22,167,1,0,0,
0,24,175,1,0,0,0,26,181,1,0,0,0,28,187,1,0,0,0,30,193,1,0,0,0,32,195,1,0,
0,0,34,199,1,0,0,0,36,203,1,0,0,0,38,207,1,0,0,0,40,211,1,0,0,0,42,215,1,
0,0,0,44,219,1,0,0,0,46,226,1,0,0,0,48,233,1,0,0,0,50,240,1,0,0,0,52,245,
1,0,0,0,54,250,1,0,0,0,56,255,1,0,0,0,58,260,1,0,0,0,60,263,1,0,0,0,62,267,
1,0,0,0,64,272,1,0,0,0,66,280,1,0,0,0,68,289,1,0,0,0,70,291,1,0,0,0,72,293,
1,0,0,0,74,295,1,0,0,0,76,297,1,0,0,0,78,299,1,0,0,0,80,301,1,0,0,0,82,305,
1,0,0,0,84,309,1,0,0,0,86,343,1,0,0,0,88,345,1,0,0,0,90,347,1,0,0,0,92,354,
1,0,0,0,94,363,1,0,0,0,96,505,1,0,0,0,98,523,1,0,0,0,100,529,1,0,0,0,102,
534,1,0,0,0,104,536,1,0,0,0,106,540,1,0,0,0,108,546,1,0,0,0,110,552,1,0,
0,0,112,558,1,0,0,0,114,561,1,0,0,0,116,565,1,0,0,0,118,567,1,0,0,0,120,
569,1,0,0,0,122,571,1,0,0,0,124,573,1,0,0,0,126,607,1,0,0,0,128,609,1,0,
0,0,130,611,1,0,0,0,132,619,1,0,0,0,134,629,1,0,0,0,136,635,1,0,0,0,138,
640,1,0,0,0,140,141,5,91,0,0,141,142,1,0,0,0,142,143,6,0,0,0,143,3,1,0,0,
0,144,145,5,59,0,0,145,5,1,0,0,0,146,147,5,123,0,0,147,7,1,0,0,0,148,149,
5,125,0,0,149,9,1,0,0,0,150,151,5,40,0,0,151,11,1,0,0,0,152,153,5,41,0,0,
153,13,1,0,0,0,154,155,5,124,0,0,155,15,1,0,0,0,156,157,5,95,0,0,157,17,
1,0,0,0,158,159,5,92,0,0,159,160,5,112,0,0,160,161,5,105,0,0,161,19,1,0,
0,0,162,163,5,92,0,0,163,164,5,105,0,0,164,165,5,110,0,0,165,166,5,116,0,
0,166,21,1,0,0,0,167,168,5,92,0,0,168,169,5,109,0,0,169,170,5,97,0,0,170,
171,5,116,0,0,171,172,5,104,0,0,172,173,5,114,0,0,173,174,5,109,0,0,174,
23,1,0,0,0,175,176,5,92,0,0,176,177,5,102,0,0,177,178,5,114,0,0,178,179,
5,97,0,0,179,180,5,99,0,0,180,25,1,0,0,0,181,182,5,92,0,0,182,183,5,99,0,
0,183,184,5,100,0,0,184,185,5,111,0,0,185,186,5,116,0,0,186,27,1,0,0,0,187,
188,5,92,0,0,188,189,5,115,0,0,189,190,5,113,0,0,190,191,5,114,0,0,191,192,
5,116,0,0,192,29,1,0,0,0,193,194,5,92,0,0,194,31,1,0,0,0,195,196,5,115,0,
0,196,197,5,105,0,0,197,198,5,110,0,0,198,33,1,0,0,0,199,200,5,99,0,0,200,
201,5,111,0,0,201,202,5,115,0,0,202,35,1,0,0,0,203,204,5,116,0,0,204,205,
5,97,0,0,205,206,5,110,0,0,206,37,1,0,0,0,207,208,5,99,0,0,208,209,5,111,
0,0,209,210,5,116,0,0,210,39,1,0,0,0,211,212,5,115,0,0,212,213,5,101,0,0,
213,214,5,99,0,0,214,41,1,0,0,0,215,216,5,99,0,0,216,217,5,115,0,0,217,218,
5,99,0,0,218,43,1,0,0,0,219,220,5,97,0,0,220,221,5,114,0,0,221,222,5,99,
0,0,222,223,5,115,0,0,223,224,5,105,0,0,224,225,5,110,0,0,225,45,1,0,0,0,
226,227,5,97,0,0,227,228,5,114,0,0,228,229,5,99,0,0,229,230,5,99,0,0,230,
231,5,111,0,0,231,232,5,115,0,0,232,47,1,0,0,0,233,234,5,97,0,0,234,235,
5,114,0,0,235,236,5,99,0,0,236,237,5,116,0,0,237,238,5,97,0,0,238,239,5,
110,0,0,239,49,1,0,0,0,240,241,5,115,0,0,241,242,5,105,0,0,242,243,5,110,
0,0,243,244,5,104,0,0,244,51,1,0,0,0,245,246,5,99,0,0,246,247,5,111,0,0,
247,248,5,115,0,0,248,249,5,104,0,0,249,53,1,0,0,0,250,251,5,116,0,0,251,
252,5,97,0,0,252,253,5,110,0,0,253,254,5,104,0,0,254,55,1,0,0,0,255,256,
5,99,0,0,256,257,5,111,0,0,257,258,5,116,0,0,258,259,5,104,0,0,259,57,1,
0,0,0,260,261,5,108,0,0,261,262,5,110,0,0,262,59,1,0,0,0,263,264,5,108,0,
0,264,265,5,111,0,0,265,266,5,103,0,0,266,61,1,0,0,0,267,268,5,92,0,0,268,
269,5,108,0,0,269,270,5,111,0,0,270,271,5,103,0,0,271,63,1,0,0,0,272,273,
5,92,0,0,273,274,5,108,0,0,274,275,5,101,0,0,275,276,5,102,0,0,276,277,5,
116,0,0,277,278,1,0,0,0,278,279,6,31,1,0,279,65,1,0,0,0,280,281,5,92,0,0,
281,282,5,114,0,0,282,283,5,105,0,0,283,284,5,103,0,0,284,285,5,104,0,0,
285,286,5,116,0,0,286,287,1,0,0,0,287,288,6,32,1,0,288,67,1,0,0,0,289,290,
5,43,0,0,290,69,1,0,0,0,291,292,5,45,0,0,292,71,1,0,0,0,293,294,5,94,0,0,
294,73,1,0,0,0,295,296,5,61,0,0,296,75,1,0,0,0,297,298,5,60,0,0,298,77,1,
0,0,0,299,300,5,62,0,0,300,79,1,0,0,0,301,302,5,92,0,0,302,303,5,108,0,0,
303,304,5,101,0,0,304,81,1,0,0,0,305,306,5,92,0,0,306,307,5,103,0,0,307,
308,5,101,0,0,308,83,1,0,0,0,309,310,5,44,0,0,310,85,1,0,0,0,311,313,3,88,
43,0,312,311,1,0,0,0,313,314,1,0,0,0,314,312,1,0,0,0,314,315,1,0,0,0,315,
316,1,0,0,0,316,320,5,46,0,0,317,319,3,88,43,0,318,317,1,0,0,0,319,322,1,
0,0,0,320,318,1,0,0,0,320,321,1,0,0,0,321,324,1,0,0,0,322,320,1,0,0,0,323,
325,3,92,45,0,324,323,1,0,0,0,324,325,1,0,0,0,325,344,1,0,0,0,326,328,5,
46,0,0,327,329,3,88,43,0,328,327,1,0,0,0,329,330,1,0,0,0,330,328,1,0,0,0,
330,331,1,0,0,0,331,333,1,0,0,0,332,334,3,92,45,0,333,332,1,0,0,0,333,334,
1,0,0,0,334,344,1,0,0,0,335,337,3,88,43,0,336,335,1,0,0,0,337,338,1,0,0,
0,338,336,1,0,0,0,338,339,1,0,0,0,339,341,1,0,0,0,340,342,3,92,45,0,341,
340,1,0,0,0,341,342,1,0,0,0,342,344,1,0,0,0,343,312,1,0,0,0,343,326,1,0,
0,0,343,336,1,0,0,0,344,87,1,0,0,0,345,346,7,0,0,0,346,89,1,0,0,0,347,351,
7,1,0,0,348,350,7,2,0,0,349,348,1,0,0,0,350,353,1,0,0,0,351,349,1,0,0,0,
351,352,1,0,0,0,352,91,1,0,0,0,353,351,1,0,0,0,354,356,7,3,0,0,355,357,7,
4,0,0,356,355,1,0,0,0,356,357,1,0,0,0,357,359,1,0,0,0,358,360,3,88,43,0,
359,358,1,0,0,0,360,361,1,0,0,0,361,359,1,0,0,0,361,362,1,0,0,0,362,93,1,
0,0,0,363,501,5,92,0,0,364,365,5,97,0,0,365,366,5,108,0,0,366,367,5,112,
0,0,367,368,5,104,0,0,368,502,5,97,0,0,369,370,5,98,0,0,370,371,5,101,0,
0,371,372,5,116,0,0,372,502,5,97,0,0,373,374,5,103,0,0,374,375,5,97,0,0,
375,376,5,109,0,0,376,377,5,109,0,0,377,502,5,97,0,0,378,379,5,100,0,0,379,
380,5,101,0,0,380,381,5,108,0,0,381,382,5,116,0,0,382,502,5,97,0,0,383,384,
5,101,0,0,384,385,5,112,0,0,385,386,5,115,0,0,386,387,5,105,0,0,387,388,
5,108,0,0,388,389,5,111,0,0,389,502,5,110,0,0,390,391,5,122,0,0,391,392,
5,101,0,0,392,393,5,116,0,0,393,502,5,97,0,0,394,395,5,101,0,0,395,396,5,
116,0,0,396,502,5,97,0,0,397,398,5,116,0,0,398,399,5,104,0,0,399,400,5,101,
0,0,400,401,5,116,0,0,401,502,5,97,0,0,402,403,5,105,0,0,403,404,5,111,0,
0,404,405,5,116,0,0,405,502,5,97,0,0,406,407,5,107,0,0,407,408,5,97,0,0,
408,409,5,112,0,0,409,410,5,112,0,0,410,502,5,97,0,0,411,412,5,108,0,0,412,
413,5,97,0,0,413,414,5,109,0,0,414,415,5,98,0,0,415,416,5,100,0,0,416,502,
5,97,0,0,417,418,5,109,0,0,418,502,5,117,0,0,419,420,5,120,0,0,420,502,5,
105,0,0,421,422,5,114,0,0,422,423,5,104,0,0,423,502,5,111,0,0,424,425,5,
115,0,0,425,426,5,105,0,0,426,427,5,103,0,0,427,428,5,109,0,0,428,502,5,
97,0,0,429,430,5,116,0,0,430,431,5,97,0,0,431,502,5,117,0,0,432,433,5,117,
0,0,433,434,5,112,0,0,434,435,5,115,0,0,435,436,5,105,0,0,436,437,5,108,
0,0,437,438,5,111,0,0,438,502,5,110,0,0,439,440,5,112,0,0,440,441,5,104,
0,0,441,502,5,105,0,0,442,443,5,99,0,0,443,444,5,104,0,0,444,502,5,105,0,
0,445,446,5,112,0,0,446,447,5,115,0,0,447,502,5,105,0,0,448,449,5,111,0,
0,449,450,5,109,0,0,450,451,5,101,0,0,451,452,5,103,0,0,452,502,5,97,0,0,
453,454,5,71,0,0,454,455,5,97,0,0,455,456,5,109,0,0,456,457,5,109,0,0,457,
502,5,97,0,0,458,459,5,68,0,0,459,460,5,101,0,0,460,461,5,108,0,0,461,462,
5,116,0,0,462,502,5,97,0,0,463,464,5,84,0,0,464,465,5,104,0,0,465,466,5,
101,0,0,466,467,5,116,0,0,467,502,5,97,0,0,468,469,5,76,0,0,469,470,5,97,
0,0,470,471,5,109,0,0,471,472,5,98,0,0,472,473,5,100,0,0,473,502,5,97,0,
0,474,475,5,88,0,0,475,502,5,105,0,0,476,477,5,80,0,0,477,502,5,105,0,0,
478,479,5,83,0,0,479,480,5,105,0,0,480,481,5,103,0,0,481,482,5,109,0,0,482,
502,5,97,0,0,483,484,5,85,0,0,484,485,5,112,0,0,485,486,5,115,0,0,486,487,
5,105,0,0,487,488,5,108,0,0,488,489,5,111,0,0,489,502,5,110,0,0,490,491,
5,80,0,0,491,492,5,104,0,0,492,502,5,105,0,0,493,494,5,80,0,0,494,495,5,
115,0,0,495,502,5,105,0,0,496,497,5,79,0,0,497,498,5,109,0,0,498,499,5,101,
0,0,499,500,5,103,0,0,500,502,5,97,0,0,501,364,1,0,0,0,501,369,1,0,0,0,501,
373,1,0,0,0,501,378,1,0,0,0,501,383,1,0,0,0,501,390,1,0,0,0,501,394,1,0,
0,0,501,397,1,0,0,0,501,402,1,0,0,0,501,406,1,0,0,0,501,411,1,0,0,0,501,
417,1,0,0,0,501,419,1,0,0,0,501,421,1,0,0,0,501,424,1,0,0,0,501,429,1,0,
0,0,501,432,1,0,0,0,501,439,1,0,0,0,501,442,1,0,0,0,501,445,1,0,0,0,501,
448,1,0,0,0,501,453,1,0,0,0,501,458,1,0,0,0,501,463,1,0,0,0,501,468,1,0,
0,0,501,474,1,0,0,0,501,476,1,0,0,0,501,478,1,0,0,0,501,483,1,0,0,0,501,
490,1,0,0,0,501,493,1,0,0,0,501,496,1,0,0,0,502,95,1,0,0,0,503,506,3,90,
44,0,504,506,3,94,46,0,505,503,1,0,0,0,505,504,1,0,0,0,506,520,1,0,0,0,507,
508,5,95,0,0,508,509,5,123,0,0,509,516,1,0,0,0,510,517,3,90,44,0,511,513,
3,88,43,0,512,511,1,0,0,0,513,514,1,0,0,0,514,512,1,0,0,0,514,515,1,0,0,
0,515,517,1,0,0,0,516,510,1,0,0,0,516,512,1,0,0,0,517,518,1,0,0,0,518,519,
5,125,0,0,519,521,1,0,0,0,520,507,1,0,0,0,520,521,1,0,0,0,521,97,1,0,0,0,
522,524,7,5,0,0,523,522,1,0,0,0,524,525,1,0,0,0,525,523,1,0,0,0,525,526,
1,0,0,0,526,527,1,0,0,0,527,528,6,48,1,0,528,99,1,0,0,0,529,530,5,92,0,0,
530,531,5,32,0,0,531,532,1,0,0,0,532,533,6,49,1,0,533,101,1,0,0,0,534,535,
9,0,0,0,535,103,1,0,0,0,536,537,5,93,0,0,537,538,1,0,0,0,538,539,6,51,2,
0,539,105,1,0,0,0,540,541,5,92,0,0,541,542,5,102,0,0,542,543,5,114,0,0,543,
544,5,97,0,0,544,545,5,99,0,0,545,107,1,0,0,0,546,547,5,92,0,0,547,548,5,
99,0,0,548,549,5,100,0,0,549,550,5,111,0,0,550,551,5,116,0,0,551,109,1,0,
0,0,552,553,5,92,0,0,553,554,5,115,0,0,554,555,5,113,0,0,555,556,5,114,0,
0,556,557,5,116,0,0,557,111,1,0,0,0,558,559,5,94,0,0,559,113,1,0,0,0,560,
562,7,1,0,0,561,560,1,0,0,0,562,563,1,0,0,0,563,561,1,0,0,0,563,564,1,0,
0,0,564,115,1,0,0,0,565,566,5,40,0,0,566,117,1,0,0,0,567,568,5,41,0,0,568,
119,1,0,0,0,569,570,5,123,0,0,570,121,1,0,0,0,571,572,5,125,0,0,572,123,
1,0,0,0,573,574,5,49,0,0,574,125,1,0,0,0,575,577,5,45,0,0,576,575,1,0,0,
0,576,577,1,0,0,0,577,579,1,0,0,0,578,580,3,128,63,0,579,578,1,0,0,0,580,
581,1,0,0,0,581,579,1,0,0,0,581,582,1,0,0,0,582,583,1,0,0,0,583,587,5,46,
0,0,584,586,3,128,63,0,585,584,1,0,0,0,586,589,1,0,0,0,587,585,1,0,0,0,587,
588,1,0,0,0,588,608,1,0,0,0,589,587,1,0,0,0,590,592,5,45,0,0,591,590,1,0,
0,0,591,592,1,0,0,0,592,593,1,0,0,0,593,595,5,46,0,0,594,596,3,128,63,0,
595,594,1,0,0,0,596,597,1,0,0,0,597,595,1,0,0,0,597,598,1,0,0,0,598,608,
1,0,0,0,599,601,5,45,0,0,600,599,1,0,0,0,600,601,1,0,0,0,601,603,1,0,0,0,
602,604,3,128,63,0,603,602,1,0,0,0,604,605,1,0,0,0,605,603,1,0,0,0,605,606,
1,0,0,0,606,608,1,0,0,0,607,576,1,0,0,0,607,591,1,0,0,0,607,600,1,0,0,0,
608,127,1,0,0,0,609,610,7,0,0,0,610,129,1,0,0,0,611,612,5,92,0,0,612,613,
5,108,0,0,613,614,5,101,0,0,614,615,5,102,0,0,615,616,5,116,0,0,616,617,
1,0,0,0,617,618,6,64,1,0,618,131,1,0,0,0,619,620,5,92,0,0,620,621,5,114,
0,0,621,622,5,105,0,0,622,623,5,103,0,0,623,624,5,104,0,0,624,625,5,116,
0,0,625,626,1,0,0,0,626,627,6,65,1,0,627,133,1,0,0,0,628,630,7,5,0,0,629,
628,1,0,0,0,630,631,1,0,0,0,631,629,1,0,0,0,631,632,1,0,0,0,632,633,1,0,
0,0,633,634,6,66,1,0,634,135,1,0,0,0,635,636,5,92,0,0,636,637,5,32,0,0,637,
638,1,0,0,0,638,639,6,67,1,0,639,137,1,0,0,0,640,641,9,0,0,0,641,139,1,0,
0,0,29,0,1,314,320,324,330,333,338,341,343,351,356,361,501,505,514,516,520,
525,563,576,581,587,591,597,600,605,607,631,3,2,1,0,6,0,0,2,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class LatexLexer extends antlr4.Lexer {

    static grammarFileName = "LatexLexer.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE", "UNITS" ];
	static literalNames = [ null, "'['", "';'", null, null, null, null, "'|'", 
                         "'_'", "'\\pi'", "'\\int'", "'\\mathrm'", null, 
                         null, null, "'\\'", "'sin'", "'cos'", "'tan'", 
                         "'cot'", "'sec'", "'csc'", "'arcsin'", "'arccos'", 
                         "'arctan'", "'sinh'", "'cosh'", "'tanh'", "'coth'", 
                         "'ln'", "'log'", "'\\log'", null, null, "'+'", 
                         "'-'", null, "'='", "'<'", "'>'", "'\\le'", "'\\ge'", 
                         "','", null, null, null, null, null, "']'", null, 
                         null, null, null, null, null, null, null, null, 
                         "'1'" ];
	static symbolicNames = [ null, "L_BRACKET", "SEMICOLON", "L_BRACE", "R_BRACE", 
                          "L_PAREN", "R_PAREN", "VBAR", "UNDERSCORE", "PI", 
                          "CMD_INT", "CMD_MATHRM", "CMD_FRAC", "CMD_CDOT", 
                          "CMD_SQRT", "BACK_SLASH", "CMD_SIN", "CMD_COS", 
                          "CMD_TAN", "CMD_COT", "CMD_SEC", "CMD_CSC", "CMD_ARCSIN", 
                          "CMD_ARCCOS", "CMD_ARCTAN", "CMD_SINH", "CMD_COSH", 
                          "CMD_TANH", "CMD_COTH", "CMD_LN", "CMD_LOG", "CMD_LOG_WITH_SLASH", 
                          "CMD_LEFT", "CMD_RIGHT", "ADD", "SUB", "CARET", 
                          "EQ", "LT", "GT", "LTE", "GTE", "COMMA", "NUMBER", 
                          "ID", "WS", "SLASH_SPACE", "ERROR_CHAR", "R_BRACKET", 
                          "U_CMD_FRAC", "U_CMD_CDOT", "U_CMD_SQRT", "U_CARET", 
                          "U_NAME", "U_L_PAREN", "U_R_PAREN", "U_L_BRACE", 
                          "U_R_BRACE", "U_ONE", "U_NUMBER", "U_CMD_LEFT", 
                          "U_CMD_RIGHT", "U_WS", "U_SLASH_SPACE", "U_ERROR_CHAR" ];
	static ruleNames = [ "L_BRACKET", "SEMICOLON", "L_BRACE", "R_BRACE", "L_PAREN", 
                      "R_PAREN", "VBAR", "UNDERSCORE", "PI", "CMD_INT", 
                      "CMD_MATHRM", "CMD_FRAC", "CMD_CDOT", "CMD_SQRT", 
                      "BACK_SLASH", "CMD_SIN", "CMD_COS", "CMD_TAN", "CMD_COT", 
                      "CMD_SEC", "CMD_CSC", "CMD_ARCSIN", "CMD_ARCCOS", 
                      "CMD_ARCTAN", "CMD_SINH", "CMD_COSH", "CMD_TANH", 
                      "CMD_COTH", "CMD_LN", "CMD_LOG", "CMD_LOG_WITH_SLASH", 
                      "CMD_LEFT", "CMD_RIGHT", "ADD", "SUB", "CARET", "EQ", 
                      "LT", "GT", "LTE", "GTE", "COMMA", "NUMBER", "DIGIT", 
                      "IDENTIFIER", "EXP", "GREEK_CHAR", "ID", "WS", "SLASH_SPACE", 
                      "ERROR_CHAR", "R_BRACKET", "U_CMD_FRAC", "U_CMD_CDOT", 
                      "U_CMD_SQRT", "U_CARET", "U_NAME", "U_L_PAREN", "U_R_PAREN", 
                      "U_L_BRACE", "U_R_BRACE", "U_ONE", "U_NUMBER", "U_DIGIT", 
                      "U_CMD_LEFT", "U_CMD_RIGHT", "U_WS", "U_SLASH_SPACE", 
                      "U_ERROR_CHAR" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

LatexLexer.EOF = antlr4.Token.EOF;
LatexLexer.L_BRACKET = 1;
LatexLexer.SEMICOLON = 2;
LatexLexer.L_BRACE = 3;
LatexLexer.R_BRACE = 4;
LatexLexer.L_PAREN = 5;
LatexLexer.R_PAREN = 6;
LatexLexer.VBAR = 7;
LatexLexer.UNDERSCORE = 8;
LatexLexer.PI = 9;
LatexLexer.CMD_INT = 10;
LatexLexer.CMD_MATHRM = 11;
LatexLexer.CMD_FRAC = 12;
LatexLexer.CMD_CDOT = 13;
LatexLexer.CMD_SQRT = 14;
LatexLexer.BACK_SLASH = 15;
LatexLexer.CMD_SIN = 16;
LatexLexer.CMD_COS = 17;
LatexLexer.CMD_TAN = 18;
LatexLexer.CMD_COT = 19;
LatexLexer.CMD_SEC = 20;
LatexLexer.CMD_CSC = 21;
LatexLexer.CMD_ARCSIN = 22;
LatexLexer.CMD_ARCCOS = 23;
LatexLexer.CMD_ARCTAN = 24;
LatexLexer.CMD_SINH = 25;
LatexLexer.CMD_COSH = 26;
LatexLexer.CMD_TANH = 27;
LatexLexer.CMD_COTH = 28;
LatexLexer.CMD_LN = 29;
LatexLexer.CMD_LOG = 30;
LatexLexer.CMD_LOG_WITH_SLASH = 31;
LatexLexer.CMD_LEFT = 32;
LatexLexer.CMD_RIGHT = 33;
LatexLexer.ADD = 34;
LatexLexer.SUB = 35;
LatexLexer.CARET = 36;
LatexLexer.EQ = 37;
LatexLexer.LT = 38;
LatexLexer.GT = 39;
LatexLexer.LTE = 40;
LatexLexer.GTE = 41;
LatexLexer.COMMA = 42;
LatexLexer.NUMBER = 43;
LatexLexer.ID = 44;
LatexLexer.WS = 45;
LatexLexer.SLASH_SPACE = 46;
LatexLexer.ERROR_CHAR = 47;
LatexLexer.R_BRACKET = 48;
LatexLexer.U_CMD_FRAC = 49;
LatexLexer.U_CMD_CDOT = 50;
LatexLexer.U_CMD_SQRT = 51;
LatexLexer.U_CARET = 52;
LatexLexer.U_NAME = 53;
LatexLexer.U_L_PAREN = 54;
LatexLexer.U_R_PAREN = 55;
LatexLexer.U_L_BRACE = 56;
LatexLexer.U_R_BRACE = 57;
LatexLexer.U_ONE = 58;
LatexLexer.U_NUMBER = 59;
LatexLexer.U_CMD_LEFT = 60;
LatexLexer.U_CMD_RIGHT = 61;
LatexLexer.U_WS = 62;
LatexLexer.U_SLASH_SPACE = 63;
LatexLexer.U_ERROR_CHAR = 64;

LatexLexer.UNITS = 1;




