function sleep(timerpa)
  local t1 = os.time()
  while true do 
    local t2 = os.time()
    if t2 - t1 >= timerpa then 
      print('hello')
      break 
    end
  end
end
  
local delayTime = 0.50 --设置时间长度(单位: 秒)
for i = 1,5 do
  print("0")
  sleep(delayTime) --延时delayTime秒
  print("1")
end
print("延时间隔："..delayTime.."Second")