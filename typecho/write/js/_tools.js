export default [
	{
		type: 'undo',
		title: '撤销',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="M76 463.7l294.8 294.9c19.5 19.4 52.8 5.6 52.8-21.9V561.5c202.5-8.2 344.1 59.5 501.6 338.3 8.5 15 31.5 7.9 30.6-9.3-30.5-554.7-453-571.4-532.3-569.6v-174c0-27.5-33.2-41.3-52.7-21.8L75.9 420c-12 12.1-12 31.6.1 43.7z"/></svg>'
	},
	{
		type: 'redo',
		title: '重做',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="M946.8 420L651.9 125.1c-19.5-19.5-52.7-5.7-52.7 21.8v174c-79.3-1.8-501.8 14.9-532.3 569.6-.9 17.2 22.1 24.3 30.6 9.3C255 621 396.6 553.3 599.1 561.5v175.2c0 27.5 33.3 41.3 52.8 21.9l294.8-294.9c12.1-12.1 12.1-31.6.1-43.7z"/></svg>'
	},
	{
		type: 'bold',
		title: '加粗',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M341.333 469.333h192a106.667 106.667 0 1 0 0-213.333h-192v213.333zm426.667 192a192 192 0 0 1-192 192H256V170.667h277.333a192 192 0 0 1 138.923 324.522A191.915 191.915 0 0 1 768 661.333zM341.333 554.667V768H576a106.667 106.667 0 1 0 0-213.333H341.333z"/></svg>'
	},
	{
		type: 'italic',
		title: '倾斜',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M640 853.333H298.667V768h124.885l90.283-512H384v-85.333h341.333V256H600.448l-90.283 512H640z"/></svg>'
	},
	{
		type: 'delete',
		title: '删除',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M731.904 597.333c9.813 22.016 14.763 46.507 14.763 73.387 0 57.259-22.358 102.059-67.03 134.272-44.757 32.213-106.496 48.341-185.301 48.341-69.973 0-139.221-16.256-207.787-48.81v-96.256c64.854 37.418 131.2 56.149 199.083 56.149 108.843 0 163.413-31.232 163.797-93.739a94.293 94.293 0 0 0-27.648-68.394l-5.12-4.992H128v-85.334h768v85.334H731.904zm-173.995-128H325.504a174.336 174.336 0 0 1-20.523-22.272c-18.432-23.808-27.648-52.565-27.648-86.442 0-52.736 19.883-97.579 59.606-134.528 39.808-36.95 101.29-55.424 184.533-55.424 62.763 0 122.837 13.994 180.139 41.984v91.818c-51.2-29.312-107.307-43.946-168.363-43.946-105.813 0-158.677 33.365-158.677 100.096 0 17.92 9.301 33.536 27.904 46.89 18.602 13.355 41.557 23.979 68.821 32 26.453 7.68 55.339 17.664 86.613 29.824z"/></svg>'
	},
	{
		type: 'code-inline',
		title: '行内代码',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M416.328 512.336a96 96 0 1 0 192 0 96 96 0 1 0-192 0zM336.328 860c-12.288 0-24.568-6-33.944-17.992l-224-286.584c-18.744-23.984-18.744-62.856 0-86.84l224-286.592c18.744-23.976 49.136-23.976 67.88 0 18.744 23.984 18.744 62.864 0 86.848L180.208 512l190.056 243.168c18.744 23.968 18.744 62.856 0 86.832-9.368 12-21.648 18-33.936 18zm352 0c12.28 0 24.568-6 33.936-17.992l224-286.584c18.752-23.984 18.752-62.856 0-86.84l-224-286.592c-18.744-23.976-49.136-23.976-67.872 0-18.752 23.984-18.752 62.864 0 86.848L844.448 512 654.392 755.168c-18.752 23.968-18.752 62.856 0 86.832 9.376 12 21.656 18 33.936 18z"/></svg>'
	},
	{
		type: 'hr',
		title: '横线',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M896 469.333H128c-25.6 0-42.667 17.067-42.667 42.667S102.4 554.667 128 554.667h768c25.6 0 42.667-17.067 42.667-42.667S921.6 469.333 896 469.333z"/></svg>'
	},
	{
		type: 'quote',
		title: '引用',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M195.541 739.03C151.595 692.351 128 640 128 555.135c0-149.333 104.832-283.179 257.28-349.355l38.101 58.795c-142.293 76.97-170.112 176.853-181.205 239.83 22.912-11.862 52.907-16 82.304-13.27 76.97 7.125 137.643 70.315 137.643 148.864a149.333 149.333 0 0 1-149.334 149.333 165.163 165.163 0 0 1-117.248-50.304zm426.667 0c-43.947-46.678-67.541-99.03-67.541-183.894 0-149.333 104.832-283.179 257.28-349.355l38.101 58.795c-142.293 76.97-170.112 176.853-181.205 239.83 22.912-11.862 52.906-16 82.304-13.27 76.97 7.125 137.642 70.315 137.642 148.864a149.333 149.333 0 0 1-149.333 149.333 165.163 165.163 0 0 1-117.248-50.304z"/></svg>'
	},
	{
		type: 'title',
		title: '标题',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M256 213.333h104.875v267.094h324.48V213.333h104.874v640H685.355V570.07h-324.48v283.264H256z"/></svg>'
	},
	{
		type: 'ordered-list',
		title: '有序列表',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M341.333 170.667H896V256H341.333v-85.333zm-128-42.667v128H256v42.667H128V256h42.667v-85.333H128V128h85.333zM128 597.333V490.667h85.333v-21.334H128v-42.666h128v106.666h-85.333v21.334H256v42.666H128zM213.333 832H128v-42.667h85.333V768H128v-42.667h128V896H128v-42.667h85.333V832zm128-362.667H896v85.334H341.333v-85.334zm0 298.667H896v85.333H341.333V768z"/></svg>'
	},
	{
		type: 'unordered-list',
		title: '无序列表',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M341.333 170.667H896V256H341.333v-85.333zM192 277.333a64 64 0 1 1 0-128 64 64 0 0 1 0 128zM192 576a64 64 0 1 1 0-128 64 64 0 0 1 0 128zm0 294.4a64 64 0 1 1 0-128 64 64 0 0 1 0 128zm149.333-401.067H896v85.334H341.333v-85.334zm0 298.667H896v85.333H341.333V768z"/></svg>'
	},
	{
		type: 'link',
		title: '超链接',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M879.2 131.6c-103-95.5-264.1-88-361.4 11.2L474.7 184c-13.1 13.1-3.7 35.6 13.1 37.5 26.2 1.9 52.4 7.5 78.7 15 7.5 1.9 16.9 0 22.5-5.6l9.4-9.4c54.3-54.3 142.3-59.9 198.5-11.2 63.7 54.3 65.5 151.7 7.5 209.7L662 562.3c-18.7 18.7-41.2 30-63.7 37.5-30 7.5-61.8 5.6-89.9-5.6-16.9-7.5-33.7-16.9-48.7-31.8-7.5-7.5-13.1-15-18.7-24.3-7.5-13.1-24.3-15-33.7-3.7l-52.4 52.4c-7.5 7.5-7.5 18.7-1.9 28.1 7.5 11.2 16.9 20.6 26.2 30 13.1 13.1 30 26.2 44.9 35.6 26.2 16.9 56.2 28.1 86.1 33.7 58.1 11.2 121.7 1.9 174.2-26.2 20.6-11.2 41.2-26.2 58.1-43.1l142.3-142.3c104.9-103.2 101.2-271.8-5.6-371zM534.7 803.9l-39.3-5.6s-26.2-5.6-39.3-11.2c-7.5-1.9-16.9 0-22.5 5.6l-9.4 9.4c-54.3 54.3-142.3 59.9-198.5 11.2-63.7-54.3-65.5-151.7-7.5-209.7l142.3-142.3c18.7-18.7 41.2-30 63.7-37.5 30-7.5 61.8-5.6 89.9 5.6 16.9 7.5 33.7 16.9 48.7 31.8 7.5 7.5 13.1 15 18.7 24.3 7.5 13.1 24.3 15 33.7 3.7l52.4-52.4c7.5-7.5 7.5-18.7 1.9-28.1-7.5-11.2-16.9-20.6-26.2-30-13.1-13.1-28.1-26.2-44.9-35.6-26.2-16.9-56.2-28.1-88-33.7-58.1-11.2-121.7-1.9-174.2 26.2-20.6 11.2-41.2 26.2-58.1 43.1L141.4 515.5c-99.3 99.3-106.7 260.3-11.2 361.4C229.5 985.5 398 987.4 501 884.4l46.8-46.8c13.1-9.4 3.7-31.9-13.1-33.7z"/></svg>'
	},
	{
		type: 'image',
		title: '插入图片',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M46.545 977.455V46.545h930.91v930.91zm93.091-186.182v93.09h744.728V717.918l-214.11-228.305zm0-107.055l548.585-311.854 196.143 209.454V139.636H139.636zm99.282-376.227a82.758 82.758 0 0 1 82.758-82.758 82.758 82.758 0 0 1 82.757 82.758 82.758 82.758 0 0 1-82.757 82.805 82.804 82.804 0 0 1-82.758-82.898z"/></svg>'
	},
	{
		type: 'table',
		title: '表格',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="M892.8 108h-763c-26.2 0-47.5 21.3-47.5 47.5v714c0 26.2 21.3 47.5 47.5 47.5h763c26.2 0 47.5-21.3 47.5-47.5v-714c0-26.2-21.3-47.5-47.5-47.5zm-291 294.7v172.1H411.7V402.7h190.1zm76 0h186.5v172.1H677.8V402.7zM864.3 184v142.7h-706V184h706zM158.4 841V402.7h177.3v172.1H159.8v76h175.9v188.9h76V650.8h190.1v188.9h76V650.8h186.5V841H158.4z"/></svg>'
	},
	{
		type: 'code-block',
		title: '代码块',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M902.4 454.4l-144-144a40.704 40.704 0 0 0-57.6 57.6l144 144-144 144a40.704 40.704 0 0 0 57.6 57.6l144-144a81.472 81.472 0 0 0 0-115.2zm-636.8-144l-144 144a81.472 81.472 0 0 0 0 115.2l144 144a40.704 40.704 0 0 0 57.6-57.6l-144-144 144-144a40.704 40.704 0 0 0-57.6-57.6zm109.568 544.064l195.072-706.56a40.704 40.704 0 0 1 78.528 21.632l-195.072 706.56a40.704 40.704 0 0 1-78.528-21.696z" /></svg>'
	},
	{
		type: 'html',
		title: '原生HTML',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M128 64l69.8 791.6L511 960l315.2-104.4L896 64H128zm616.4 255.8H376.8l8.2 98.8h351.2L709 715.4l-195.8 54v.6H511l-197.4-54.6-12-151.6H397l7 76.2 107 29 107.4-29 12-124.4H296.6L271 224.4h482.2l-8.8 95.4z"/></svg>'
	},
	{
		type: 'time',
		title: '当前时间',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"/><path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"/></svg>'
	},
	{
		type: 'indent',
		title: '缩进',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M692.019 192c-22.087 0-39.992 17.935-39.992 40.059v277.192c-.638-9.212-4.471-18.244-11.522-25.286l-280.74-280.353c-15.504-15.483-40.643-15.483-56.147 0-15.505 15.483-15.505 40.587 0 56.07L556.282 512 303.617 764.316c-15.505 15.482-15.505 40.587 0 56.07 15.504 15.484 40.643 15.483 56.146 0l280.74-280.352a40.074 40.074 0 0 0 2.726-3.012c5.322-6.517 8.247-14.329 8.797-22.275V791.82c0 22.122 17.905 40.057 39.992 40.057s39.993-17.935 39.993-40.057V232.059c.001-22.124-17.906-40.059-39.992-40.059z"/></svg>'
	},
	{
		type: 'character',
		title: '实体符号',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"/><path d="M517.6 351.3c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z"/></svg>'
	},
	{
		type: 'emoji',
		title: '符号表情',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="19" height="19"><path d="M512 56.889A455.111 455.111 0 0 0 56.889 512 455.111 455.111 0 0 0 512 967.111 455.111 455.111 0 0 0 967.111 512 455.111 455.111 0 0 0 512 56.889zm111.047 270.336A69.086 69.086 0 0 1 671.29 307.2c17.863 0 35.67 7.396 48.242 20.025 12.629 12.572 20.025 30.379 20.025 48.242 0 17.863-7.396 35.669-20.025 48.241-12.8 12.744-30.151 19.912-48.242 20.025a68.95 68.95 0 0 1-48.242-20.025 68.95 68.95 0 0 1-20.025-48.241c0-17.863 7.396-35.67 20.025-48.242zm-318.578 0a69.086 69.086 0 0 1 48.242-20.025c17.863 0 35.67 7.396 48.242 20.025 12.63 12.572 20.025 30.379 20.025 48.242 0 17.863-7.396 35.669-20.025 48.241-12.8 12.744-30.151 19.912-48.242 20.025a68.95 68.95 0 0 1-48.242-20.025 68.95 68.95 0 0 1-20.025-48.241c0-17.863 7.396-35.67 20.025-48.242zM786.375 566.67c-10.24 132.893-118.556 236.544-270.563 235.975-156.331 1.707-264.704-107.178-270.507-235.975a23.324 23.324 0 0 1-2.446-10.41c0-13.597 11.605-24.633 26.282-24.52h493.796c14.336 0 26.055 11.037 26.055 24.52a24.292 24.292 0 0 1-2.617 10.41z"/></svg>'
	},
	{
		type: 'expression',
		title: '图片表情',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M512 63.488q93.184 0 174.592 35.328t142.336 95.744 96.256 142.336 35.328 174.08q0 93.184-35.328 174.592t-96.256 142.336-142.336 96.256T512 959.488q-92.16 0-174.08-35.328t-142.336-96.256T99.84 685.568 64.512 510.976q0-92.16 35.328-174.08t95.744-142.336T337.92 98.816 512 63.488zM247.808 274.432q13.312 43.008 28.672 78.848 13.312 30.72 29.696 59.904t33.792 37.376q17.408 9.216 36.864 1.536t35.84-20.992q18.432-15.36 37.888-38.912zm501.76 537.6q8.192-3.072 12.8-8.192t6.144-11.264 1.536-11.776-1.024-7.68q-2.048-8.192-5.12-11.264-12.288-28.672-35.84-51.712t-56.32-39.936-73.728-26.112-88.064-9.216-89.6 10.24-76.288 28.672-57.856 43.008-33.28 53.248q-1.024 1.024-1.024 3.072-2.048 6.144 1.024 20.48t18.432 18.432q23.552-29.696 57.344-53.248 29.696-20.48 73.728-36.864t105.472-16.384 107.008 16.384 75.264 36.864q34.816 23.552 59.392 53.248zM680.96 450.56q17.408-8.192 33.792-37.376t29.696-59.904q15.36-35.84 28.672-78.848l-202.752 117.76q19.456 23.552 37.888 38.912 16.384 13.312 35.84 20.992t36.864-1.536z"/></svg>'
	},
	/* --------------------------- 短代码开始 --------------------------- */
	{
		type: 'task-no',
		title: '任务 - 未完成',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="M831.55 128.531c38.35 0 63.911 25.568 63.911 63.91v639.104c0 38.355-25.561 63.916-63.91 63.916H192.44c-38.34 0-63.908-25.56-63.908-63.916V192.442c0-38.343 25.567-63.91 63.908-63.91h639.11m0-63.91H192.44c-70.3 0-127.816 57.518-127.816 127.82v639.103c0 70.308 57.515 127.833 127.816 127.833h639.11c70.294 0 127.822-57.525 127.822-127.833V192.442c0-70.302-57.527-127.82-127.823-127.82zm0 0"/></svg>'
	},
	{
		type: 'task-yes',
		title: '任务 - 已完成',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="M831.551 64.623h-639.11c-70.3 0-127.816 57.517-127.816 127.819v639.103c0 70.308 57.515 127.833 127.816 127.833h639.11c70.294 0 127.822-57.525 127.822-127.833V192.442c0-70.302-57.527-127.82-127.822-127.82zM646.217 486.44c-108.652 159.779-204.52 345.115-204.52 345.115L192.443 550.351l63.916-70.303 153.385 146.994s76.695-127.822 178.95-236.469c102.261-108.652 223.689-198.127 223.689-198.127l19.17 63.916c0-.001-102.255 108.646-185.337 230.078z"/></svg>'
	},
	{
		type: 'mtitle',
		title: '居中标题',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M967.1 455.3H672.2c-23.5-66.1-86-113.8-160.2-113.8s-136.7 47.6-160.2 113.8H56.9C25.5 455.3 0 480.7 0 512.2c0 31.4 25.5 56.9 56.9 56.9h294.9c23.5 66.1 86 113.8 160.2 113.8s136.7-47.6 160.2-113.8h294.9c31.4 0 56.9-25.5 56.9-56.9 0-31.5-25.5-56.9-56.9-56.9zM512 569.1c-31.4 0-56.9-25.5-56.9-56.9s25.5-56.9 56.9-56.9 56.9 25.5 56.9 56.9c0 31.3-25.5 56.9-56.9 56.9z"/></svg>'
	},
	{
		type: 'dplayer',
		title: 'M3U8/MP4视频',
		innerHTML: '<svg viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="M508.197 298.642c-39.278-20.919-69.34-5.12-69.34 35.109v211.822c0 40.301 29.989 56.027 69.12 34.889L698.88 477.257c38.985-21.065 39.57-55.442.293-76.361L508.197 298.642z"/><path d="M1060.571 877.714H109.714C49.225 877.714 0 828.562 0 768V109.714C0 49.225 49.225 0 109.714 0h950.857c60.416 0 109.715 49.225 109.715 109.714V768c0 60.562-49.299 109.714-109.715 109.714zM109.714 73.143a36.571 36.571 0 0 0-36.571 36.571V768c0 20.114 16.457 36.571 36.571 36.571h950.857c20.115 0 36.572-16.457 36.572-36.571V109.714a36.571 36.571 0 0 0-36.572-36.571H109.714zM219.43 950.857h731.428V1024H219.43v-73.143z"/></svg>'
	},
	{
		type: 'bilibili',
		title: '哔哩哔哩视频',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="M1023.488 344.064c-3.072-143.36-128-170.496-128-170.496s-97.28-.512-224.256-1.536l92.16-89.088s14.336-18.432-10.24-38.912-26.624-11.264-34.816-6.144c-7.68 5.632-117.76 113.664-137.216 133.12-50.176 0-102.4-.512-153.088-.512h17.92s-132.096-130.56-140.8-136.192-9.728-14.336-34.816 6.144c-24.576 20.48-10.24 38.912-10.24 38.912l94.208 91.648c-102.4 0-190.464.512-231.424 2.048C-9.728 210.944.512 344.064.512 344.064s1.536 285.696 0 429.568c14.336 144.384 125.44 167.424 125.44 167.424s44.032 1.024 76.8 1.024c3.072 9.216 6.144 54.272 56.32 54.272s56.32-54.272 56.32-54.272 369.152-1.536 399.872-1.536c1.536 15.872 9.216 57.344 59.904 56.32 50.176-1.024 53.76-59.904 53.76-59.904s17.408-1.536 68.608 0C1017.344 914.944 1024 774.656 1024 774.656s-2.048-287.232-.512-430.592zM920.576 800.768c0 22.528-17.92 40.96-39.936 40.96H153.6c-22.016 0-39.936-18.432-39.936-40.96V318.464c0-22.528 17.92-40.96 39.936-40.96h727.04c22.016 0 39.936 18.432 39.936 40.96v482.304z"/><path d="M403.968 414.208l-214.016 40.96 18.432 80.384 211.456-40.96-15.872-80.384zm115.2 212.48c-52.224 112.128-99.328 27.648-99.328 27.648l-34.816 22.528s69.12 94.208 134.656 22.528c77.312 71.68 136.704-23.04 136.704-23.04l-31.744-20.48c0-.512-55.808 79.872-105.472-29.184zM624.64 494.08l211.968 40.96 17.92-80.384-213.504-40.96-16.384 80.384z"/></svg>'
	},
	{
		type: 'netease-list',
		title: '网易云列表',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="M919.438 376.378c-3.328 17.214-8.767 31.228-16.254 42.043-7.487 10.815-13.822 15.87-19.005 15.166-5.248-.768-9.92-4.48-14.015-11.198-4.095-6.72-7.295-19.07-9.535-36.988-3.711-29.18-13.246-50.682-28.54-64.504-15.295-13.822-38.972-23.741-71.095-29.692-33.596-6.72-63.225-20.35-89.013-40.956-25.725-20.54-47.227-39.802-64.377-57.784-16.382-15.742-29.053-21.31-38.012-16.83s-13.437 12.734-13.437 24.7v48.25l-1.088 493.444v63.93c.768 17.916-2.048 37.946-8.383 60.023-6.335 22.077-18.302 42.81-35.836 62.264s-40.89 36.092-69.943 49.915c-29.117 13.822-65.337 21.884-108.595 24.124-44.027 2.24-83.766-5.631-119.217-23.55-35.452-17.916-62.905-40.569-82.295-67.83-19.39-27.26-28.923-57.21-28.54-89.718.384-32.508 14.335-62.967 41.98-91.38 27.644-28.413 57.464-48.25 89.589-59.45 32.06-11.197 63.03-17.405 92.916-18.492 29.884-1.088 56.505.96 80.054 6.143 23.485 5.247 40.827 10.11 52.025 14.59 0 0 .384-505.026 1.152-615.669 0-21.693 5.631-39.42 16.766-53.306 11.2-13.821 26.11-21.884 44.795-24.124 15.614-2.368 28.477.768 38.524 9.407 10.11 8.574 20.35 20.541 30.78 35.9 10.494 15.293 23.356 32.699 38.65 52.153 15.295 19.454 36.029 38.522 62.137 57.21 22.397 17.212 41.979 29.499 58.809 36.986a4986.732 4986.732 0 0 0 47.034 20.734c14.526 6.335 28.924 14.014 43.13 22.973 14.207 8.96 29.885 23.55 47.035 43.706 17.15 19.454 27.644 39.612 31.356 60.537 3.647 20.99 3.84 40.06.448 57.273z"/></svg>'
	},
	{
		type: 'netease-single',
		title: '网易云单首',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M837.766 364.816c-50.828-54.107-111.313-91.2-187.245-98.706-7.324-.728-18.983-5.028-20.404-9.983-6.595-23.064-12.826-46.784-14.283-70.54-1.64-26.6 20.368-44.744 46.748-39.425 16.724 3.389 32.392 12.389 48.277 19.457 10.968 4.883 20.988 12.389 32.32 15.923 27.472 8.49 53.378-7.725 58.589-35.78 4.408-23.684-4.41-42.922-22.154-58.153-28.857-24.776-62.998-37.748-100.054-44.743-70.977-13.409-152.74 38.768-169.648 108.908-8.453 35.088-1.712 68.755 10.457 101.51 6.486 17.527 1.968 24.595-16.032 30.862-118.308 41.32-182.508 155.436-154.49 276.075 16.506 71.123 59.465 121.733 131.862 138.604 74.44 17.344 136.818-7.943 182.62-69.192 37.056-49.516 39.133-105.519 23.976-163.197-7.943-30.242-17.198-60.156-26.672-92.948 5.575 1.094 7.397 1.203 9.037 1.786 125.486 45.436 188.959 183.858 125.232 318.813-63.91 135.325-211.911 183.348-344.362 155.072-166.26-35.526-278.955-210.93-245.286-377.62 23.61-116.924 91.564-198.32 200.253-246.342 8.27-3.68 16.797-7.251 24.266-12.28 15.595-10.53 24.886-25.687 23.064-44.633-1.93-19.93-11.878-37.93-32.136-42.011-16.215-3.28-36.036-3.68-50.72 2.696-166.223 72.107-260.848 197.994-272.869 379.884-18.655 282.566 246.128 504.023 521.296 440.882 171.833-39.424 293.167-182.18 303.986-330.804 7.105-97.248-18.619-182.763-85.625-254.11zm-309.05 234.651c-39.06 3.352-71.233-23.83-77.609-65.548-11.113-72.545 19.894-127.162 85.48-151.94 12.606-4.774 18.18-2.915 21.934 10.858 8.745 32.1 19.493 63.617 28.675 95.609 3.133 10.93 3.972 22.554 5.83 33.885-.219 42.922-25.578 73.82-64.31 77.136z"/></svg>'
	},
	{
		type: 'abtn',
		title: '多彩按钮',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M839.68 163.84a163.84 163.84 0 0 1 163.84 163.84v327.68A163.84 163.84 0 0 1 839.68 819.2H184.32A163.84 163.84 0 0 1 20.48 655.36V327.68a163.84 163.84 0 0 1 163.84-163.84h655.36zm0 81.92H184.32a81.92 81.92 0 0 0-81.715 75.776l-.205 6.144v327.68a81.92 81.92 0 0 0 75.776 81.715l6.144.205h655.36a81.92 81.92 0 0 0 81.715-75.776l.205-6.144V327.68a81.92 81.92 0 0 0-75.776-81.715l-6.144-.205z"/><path d="M347.013 483.574c1.639-1.925 3.236-4.014 4.792-6.185 6.759-11.141 10.322-24.371 10.322-39.199 0-20.808-6.799-37.806-20.111-50.463-13.435-12.656-31.785-18.964-54.6-18.964H197.96c-7.619 0-13.64 6.758-13.64 15.032v215.532c0 8.397 6.144 15.073 13.64 15.073h89.702c23.634 0 42.476-5.038 56.443-15.278 17.367-13.23 26.132-33.587 26.132-60.457 0-17.94-4.26-32.89-12.697-44.237a54.682 54.682 0 0 0-10.527-10.854zm-47.39-28.836c-1.557 1.393-6.882 4.506-20.726 4.506h-35.308v-31.417h35.84c13.025 0 18.31 2.785 20.316 4.26.697.573 2.867 2.417 2.867 10.24 0 6.308-1.228 10.65-2.99 12.41zm-56.034 63.693h40.182c14.582 0 20.644 3.195 22.815 5.038 2.826 2.457 4.3 7.373 4.3 14.623 0 7.454-2.498 10.444-6.266 12.861-3.236 1.966-9.462 4.383-21.668 4.383h-39.363V518.43zM586.26 368.64H426.27c-7.577 0-13.639 6.8-13.639 15.073v30.229c0 8.397 6.144 15.032 13.64 15.032h50.299v170.27c0 8.357 6.144 15.033 13.68 15.033H522.2c7.619 0 13.64-6.758 13.64-15.032V429.097h50.34c7.577 0 13.64-6.758 13.64-15.032v-30.27c.081-8.356-6.063-15.155-13.518-15.155zm239.862 0h-32.276c-7.619 0-13.64 6.8-13.64 15.073v108.503l-72.704-117.022a13.19 13.19 0 0 0-11.264-6.554H664.29c-7.618 0-13.64 6.8-13.64 15.073v215.532c0 8.356 6.145 15.032 13.64 15.032h31.95c7.618 0 13.639-6.758 13.639-15.032v-110.47l73.728 119.071c2.54 4.137 6.8 6.554 11.264 6.554H826c7.618 0 13.68-6.8 13.68-15.073V383.795c.082-8.356-6.062-15.155-13.517-15.155z"/></svg>'
	},
	{
		type: 'anote',
		title: '便条按钮',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M856.73 796.7h-690c-57.9 0-105-47.1-105-105v-360c0-57.9 47.1-105 105-105h690c57.9 0 105 47.1 105 105v360c0 57.89-47.1 105-105 105zm-690-500.01c-19.3 0-35 15.7-35 35v360c0 19.3 15.7 35 35 35h690c19.3 0 35-15.7 35-35v-360c0-19.3-15.7-35-35-35h-690z"/><path d="M233.16 431.69H790.3v160H233.16z"/></svg>'
	},
	{
		type: 'dotted',
		title: '彩色虚线',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M111.09 562.26a42.6 42.6 0 1 1 0-85.19h127.78a42.6 42.6 0 0 1 0 85.19zm340.75-3a42.59 42.59 0 1 1 0-85.18h127.78a42.59 42.59 0 1 1 0 85.18zm340.75 0a42.59 42.59 0 0 1 0-85.18h127.79a42.59 42.59 0 1 1 0 85.18zm0 0"/></svg>'
	},
	{
		type: 'hide',
		title: '回复可见',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M342.016 640.512a483.328 483.328 0 0 1-126.976-63.488l-104.96 102.4a51.2 51.2 0 0 1-71.168-74.24l102.4-96.256a419.328 419.328 0 0 1-84.48-133.12 51.2 51.2 0 1 1 95.744-34.816 278.016 278.016 0 0 0 15.872 32.256 378.88 378.88 0 0 0 55.808 77.312A381.952 381.952 0 0 0 512 563.2a382.464 382.464 0 0 0 286.208-112.64 378.88 378.88 0 0 0 58.368-77.312 278.016 278.016 0 0 0 13.824-32.256 51.2 51.2 0 1 1 95.744 34.816 419.328 419.328 0 0 1-84.48 133.12l102.4 96.256a51.2 51.2 0 0 1-71.168 73.216L807.936 576a460.8 460.8 0 0 1-125.952 62.976l58.368 102.4a51.2 51.2 0 0 1-88.576 51.2l-74.752-130.048A521.728 521.728 0 0 1 512 665.6q-32.256 0-62.976-3.072l-76.8 129.536a51.2 51.2 0 0 1-88.576-51.2z"/></svg>'
	},
	/* --------------------------- 短代码结束 --------------------------- */
	{
		type: 'clean',
		title: '清屏',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M479.3 863.6L899.9 443c37.4-37.4 37.4-98.3 0-135.8L716.7 124.1C698.5 106 674.4 96 648.7 96c-25.8 0-50.4 10.8-68.6 29l-455 455c-18.2 18.2-29 42.8-29 68.6 0 25.7 9.9 49.9 28.1 68l183.1 183.2c18.1 18.1 42.2 28.1 67.9 28.1 3 0 5.9-.1 8.8-.4v.1h512c17.7 0 32-14.3 32-32s-14.3-32-32-32H479.3zm-126.8-9L169.4 671.5c-6-6-9.4-14.1-9.4-22.6 0-8.5 3.3-16.6 9.4-22.6l104.9-104.9 228.4 228.4-104.9 104.8c-6 6-14.1 9.4-22.6 9.4-8.6 0-16.6-3.3-22.7-9.4z"/></svg>'
	},
	{
		type: 'download',
		title: '下载',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M64.3 874.8v62.6c0 4.8 3.9 8.7 8.7 8.7h878c4.8 0 8.7-3.9 8.7-8.7v-62.6c0-4.8-3.9-8.7-8.7-8.7H73c-4.8 0-8.7 3.9-8.7 8.7zm418.9-99.9c3.2 2.9 6.8 5.3 10.9 7.1 5.2 2.3 10.7 3.4 16.1 3.4 9.8 0 19.5-3.6 27-10.5l291.4-270.4c3.5-3.2 3.7-8.7.5-12.2l-42.3-46.2c-3.3-3.6-8.8-3.8-12.3-.5L550.2 654.5v-528c0-4.8-3.9-8.7-8.7-8.7h-62.6c-4.8 0-8.7 3.9-8.7 8.7v527.9L239.6 442.9c-3.5-3.2-9-3-12.3.5L185 489.7c-3.2 3.5-3 9 .5 12.3l297.7 272.9z"/></svg>'
	},
	{
		type: 'fullScreen',
		title: '全屏/取消全屏',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M181.2 803.4V637H98v208c0 45.9 37.2 83.2 83.2 83.2h208V845H222.8c-23 0-41.6-18.6-41.6-41.6zM844.8 98.6h-208v83.2h166.4c23 0 41.6 18.6 41.6 41.6v166.4H928v-208c0-46-37.3-83.2-83.2-83.2zm-746.6 83v208h83.2V223.2c0-23 18.6-41.6 41.6-41.6h166.4V98.4h-208c-46 0-83.2 37.3-83.2 83.2zm746.4 455.6v166.4c0 23-18.6 41.6-41.6 41.6H636.6v83.2h208c45.9 0 83.2-37.2 83.2-83.2v-208h-83.2z"/></svg>'
	},
	{
		type: 'draft',
		title: '保存草稿',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M96 960a32 32 0 1 1 0-64h832a32 32 0 1 1 0 64H96zm632.96-625.152L593.088 199.104l-340.48 340.48L240 690.432l148.032-14.784 340.8-340.8zm45.184-45.248l45.248-45.248-135.744-135.744-45.248 45.248L774.144 289.6zm-45.12-226.176l135.808 135.808c31.232 31.232 24.832 65.408-.192 90.368L412.16 742.144l-247.168 24.448 20.864-250.688L638.336 63.36c25.024-24.96 59.456-31.168 90.688.064z"/></svg>'
	},
	{
		type: 'publish',
		title: '发布文章',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M128 554.667h768a42.667 42.667 0 0 0 0-85.334H128a42.667 42.667 0 0 0 0 85.334z"/><path d="M469.333 128v768a42.667 42.667 0 0 0 85.334 0V128a42.667 42.667 0 0 0-85.334 0z"/></svg>'
	},
	{
		type: 'about',
		title: '关于',
		innerHTML: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M881.6 512.1c0 203.7-165.7 369.5-369.5 369.5S142.6 715.8 142.6 512.1s165.7-369.5 369.5-369.5 369.5 165.8 369.5 369.5m77.7 0c0-246.6-200.6-447.2-447.2-447.2S64.9 265.5 64.9 512.1s200.6 447.2 447.2 447.2 447.2-200.6 447.2-447.2M582.5 318.2c9-9 14.2-21.6 14.2-34.3 0-12.8-5.2-25.4-14.2-34.4s-21.6-14.2-34.4-14.2c-12.7 0-25.3 5.2-34.3 14.2-9.1 9-14.3 21.6-14.3 34.4 0 12.7 5.2 25.3 14.3 34.3 9 9 21.5 14.3 34.3 14.3s25.3-5.3 34.4-14.3m-96.6 464.3c-7.6 0-15.2-2.6-21.3-7.5-9.9-7.9-14.5-20.7-12.1-33.1l47.9-243.1-26.4 14.8c-16.4 9.2-37.1 3.4-46.3-13-9.2-16.4-3.4-37.1 12.9-46.3l90.7-51.1c11.6-6.5 25.9-5.7 36.6 2.1 10.8 7.8 16 21.1 13.4 34.1l-49.6 251.9 40.7-17.7c17.2-7.5 37.3.4 44.8 17.6 7.5 17.2-.4 37.3-17.6 44.8l-100.2 43.7c-4.3 1.9-8.9 2.8-13.5 2.8"/></svg>'
	}
];
