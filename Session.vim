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
badd +20 src/composables/useLogin.ts
badd +27 src/composables/useLogout.ts
badd +114 src/views/Login.vue
badd +4 src/views/Entrance.vue
argglobal
%argdel
$argadd ~/Code/amplify-vue-campus-entry
set stal=2
edit src/composables/useLogout.ts
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
exe 'vert 1resize ' . ((&columns * 94 + 94) / 188)
exe 'vert 2resize ' . ((&columns * 93 + 94) / 188)
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
let s:l = 27 - ((26 * winheight(0) + 38) / 76)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
27
normal! 024|
lcd ~/Code/amplify-vue-campus-entry
wincmd w
argglobal
if bufexists("~/Code/amplify-vue-campus-entry/src/composables/useLogin.ts") | buffer ~/Code/amplify-vue-campus-entry/src/composables/useLogin.ts | else | edit ~/Code/amplify-vue-campus-entry/src/composables/useLogin.ts | endif
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
exe 'vert 1resize ' . ((&columns * 94 + 94) / 188)
exe 'vert 2resize ' . ((&columns * 93 + 94) / 188)
tabedit ~/Code/amplify-vue-campus-entry/src/views/Login.vue
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
let s:l = 114 - ((67 * winheight(0) + 38) / 76)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
114
normal! 039|
lcd ~/Code/amplify-vue-campus-entry
tabedit ~/Code/amplify-vue-campus-entry/src/views/Entrance.vue
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
let s:l = 4 - ((3 * winheight(0) + 38) / 76)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
4
normal! 027|
lcd ~/Code/amplify-vue-campus-entry
tabedit ~/Code/amplify-vue-campus-entry/src/composables/useLogout.ts
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
exe 'vert 1resize ' . ((&columns * 94 + 94) / 188)
exe 'vert 2resize ' . ((&columns * 93 + 94) / 188)
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
let s:l = 27 - ((26 * winheight(0) + 38) / 76)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
27
normal! 0
lcd ~/Code/amplify-vue-campus-entry
wincmd w
argglobal
if bufexists("~/Code/amplify-vue-campus-entry/src/composables/useLogin.ts") | buffer ~/Code/amplify-vue-campus-entry/src/composables/useLogin.ts | else | edit ~/Code/amplify-vue-campus-entry/src/composables/useLogin.ts | endif
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
2wincmd w
exe 'vert 1resize ' . ((&columns * 94 + 94) / 188)
exe 'vert 2resize ' . ((&columns * 93 + 94) / 188)
tabnext 4
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
