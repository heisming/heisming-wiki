timer_manager = {}
timer_manager.__index = timer_manager
 
local callback = function()
	 print("this is a callback")
end
 
local callback1 = function()
	 print("this is a callback1")
end
 
local callback2 = function()
	 print("this is a callback2")
end
 
-- 临时变量
local timer_id = 0
local instance = nil
function timer_manager.new()
	local o = {}
	setmetatable(o, timer_manager)
	o.timerMap = {}
	return o
end

-- 单例模式 
function timer_manager.get_instance()
	if not instance then
		instance = timer_manager.new()
	end
	return instance
end

--                               间隔   次数    回调
function timer_manager:new_timer(delta, times, cb)
	local timer = { interval = delta, loop = times, func = cb, cur = 0}
	timer_id = timer_id + 1
	self.timerMap[timer_id] = timer
	return timer_id
end

function timer_manager:update(delta)  --此处的delta是多长时间调用update函数的时间间隔
	for k,v in pairs(self.timerMap) do
		v.cur = v.cur + delta
		while v.cur >= v.interval  do
			print("执行回调函数", v.func())
			v.cur = v.cur - v.interval
			v.loop = v.loop - 1
			if v.loop <= 0 then
				v = nil
				break
			end
		end
	end
end

-- timer_id由new_timer返回 停止一个定时器
function timer_manager:stop_timer(timer_id)
	self.timerMap[timer_id] = nil
end 

-- testCase
function testCase()
	local timerManager = timer_manager.get_instance()
 
	local timerid1 = timerManager:new_timer(4,2,callback)
	local timerid2 = timerManager:new_timer(2,2,callback1)
	local timerid3 = timerManager:new_timer(1,4,callback2)
	local timerid4 = timerManager:new_timer(3,2,callback)
 
	for k,v in pairs(timerManager.timerMap) do
		print("当前数据有:",k,v.interval)
	end
	
	timerManager:update(10)
	timerManager:update(1)
	timerManager:update(1)
	timerManager:update(1)
	timerManager:update(1)
	timerManager:update(1.5)
 
 
	timerManager:stop_timer(timerid1)
 
	for k,v in pairs(timerManager.timerMap) do
		print("最后数据有",k,v.interval)
	end
 
 
end
 
testCase()