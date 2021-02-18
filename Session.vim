let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/Code/amplify-vue-campus-entry
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +1 ~/Code/amplify-vue-campus-entry
badd +51 src/store/index.ts
badd +11 src/main.ts
badd +0 package.json
badd +0 src/store/auth/auth.ts
badd +51 src/store/auth/auth.js
badd +188 src/views/Login.vue
badd +1 src/composables/useLogin.ts
badd +117 src/router/index.ts
badd +230 amplify/backend/auth/amplifyvuecampusentry/amplifyvuecampusentry-cloudformation-template.yml
badd +3 src/views/Entrance.vue
badd +1 src/App.vue
badd +2 src/composables/useGlobal.ts
badd +5 src/composables/useState.ts
badd +7 src/views/Home.vue
badd +105 src/views/Store.vue
badd +0 term://.//81386:npm\ run\ serve
badd +0 src/aws-exports.js
argglobal
%argdel
$argadd ~/Code/amplify-vue-campus-entry
set stal=2
edit src/composables/useLogin.ts
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 15 - ((14 * winheight(0) + 38) / 76)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
15
normal! 0
lcd ~/Code/amplify-vue-campus-entry
tabedit ~/Code/amplify-vue-campus-entry/src/App.vue
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 1 - ((0 * winheight(0) + 38) / 76)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 0
lcd ~/Code/amplify-vue-campus-entry
tabedit ~/Code/amplify-vue-campus-entry/src/views/Entrance.vue
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 97 + 97) / 194)
exe 'vert 2resize ' . ((&columns * 96 + 97) / 194)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 3 - ((2 * winheight(0) + 38) / 76)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
3
normal! 0
lcd ~/Code/amplify-vue-campus-entry
wincmd w
argglobal
if bufexists("~/Code/amplify-vue-campus-entry/src/views/Login.vue") | buffer ~/Code/amplify-vue-campus-entry/src/views/Login.vue | else | edit ~/Code/amplify-vue-campus-entry/src/views/Login.vue | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 151 - ((65 * winheight(0) + 38) / 76)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
151
normal! 05|
lcd ~/Code/amplify-vue-campus-entry
wincmd w
exe 'vert 1resize ' . ((&columns * 97 + 97) / 194)
exe 'vert 2resize ' . ((&columns * 96 + 97) / 194)
tabedit ~/Code/amplify-vue-campus-entry/src/router/index.ts
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 97 + 97) / 194)
exe 'vert 2resize ' . ((&columns * 96 + 97) / 194)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 167 - ((49 * winheight(0) + 38) / 76)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
167
normal! 07|
lcd ~/Code/amplify-vue-campus-entry
wincmd w
argglobal
if bufexists("~/Code/amplify-vue-campus-entry/src/store/auth/auth.js") | buffer ~/Code/amplify-vue-campus-entry/src/store/auth/auth.js | else | edit ~/Code/amplify-vue-campus-entry/src/store/auth/auth.js | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 51 - ((50 * winheight(0) + 38) / 76)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
51
normal! 09|
lcd ~/Code/amplify-vue-campus-entry
wincmd w
exe 'vert 1resize ' . ((&columns * 97 + 97) / 194)
exe 'vert 2resize ' . ((&columns * 96 + 97) / 194)
tabedit ~/Code/amplify-vue-campus-entry/src/views/Store.vue
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 96 + 97) / 194)
exe 'vert 2resize ' . ((&columns * 97 + 97) / 194)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 4 - ((3 * winheight(0) + 38) / 76)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
4
normal! 0
lcd ~/Code/amplify-vue-campus-entry
wincmd w
argglobal
if bufexists("~/Code/amplify-vue-campus-entry/src/store/index.ts") | buffer ~/Code/amplify-vue-campus-entry/src/store/index.ts | else | edit ~/Code/amplify-vue-campus-entry/src/store/index.ts | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 1 - ((0 * winheight(0) + 38) / 76)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 0
lcd ~/Code/amplify-vue-campus-entry
wincmd w
exe 'vert 1resize ' . ((&columns * 96 + 97) / 194)
exe 'vert 2resize ' . ((&columns * 97 + 97) / 194)
tabnew
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
if bufexists("term://.//81386:npm\ run\ serve") | buffer term://.//81386:npm\ run\ serve | else | edit term://.//81386:npm\ run\ serve | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 6895 - ((75 * winheight(0) + 38) / 76)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
6895
normal! 0
lcd ~/Code/amplify-vue-campus-entry
tabnext 5
set stal=1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOFcA
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
