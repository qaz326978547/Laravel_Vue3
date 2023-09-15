export function useDate() {
    // 取得當前時間並轉換為指定格式
    const localtime = (time: string) => {
        const date = new Date(time);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        return formattedTime;
    };

    //當天
    const getToday = () => {
        const todayStart = new Date();
        todayStart.setHours(0, 0, 0, 0);
        const startDate = localtime(todayStart.toString());

        const currentTime = new Date();
        currentTime.setHours(23, 59, 59, 999);
        const endDate = localtime(currentTime.toString());
        return [startDate, endDate];
    };

    // 昨天
    const getYesterDay = () => {
        const currentDate = new Date();
        const date = new Date(currentDate);
        date.setDate(date.getDate() - 1);
        date.setHours(0, 0, 0, 0);
        const startDate = localtime(date.toString());
        date.setHours(23, 59, 59, 999);
        const endDate = localtime(date.toString());
        return [startDate, endDate];
    };
    //當周 以周日為第一天
    const getThisWeek = () => {
        const currentDate = new Date(); //當天日期
        const currentDay = currentDate.getDay(); //當天星期幾  以星期天为第一天
        const firstDay = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate() - currentDay,
        );
        const startTime = new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate());
        const endTime = new Date(currentDate);
        endTime.setDate(currentDate.getDate() + (6 - currentDate.getDay()));
        endTime.setHours(23, 59, 59, 999);
        const startDate = localtime(startTime.toString());
        const endDate = localtime(endTime.toString());
        return [startDate, endDate];
    };

    //上週
    const getLastWeek = () => {
        //上週第一天
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        const lastWeekFirstDay = new Date(currentDate);
        lastWeekFirstDay.setDate(currentDate.getDate() - 7 - currentDate.getDay());
        const startDate = localtime(lastWeekFirstDay.toString());
        //上週最後一天
        const lastWeekLastDay = new Date(currentDate);
        lastWeekLastDay.setHours(23, 59, 59, 999);
        lastWeekLastDay.setDate(currentDate.getDate() - 7 - currentDate.getDay() + 6);
        const endDate = localtime(lastWeekLastDay.toString());
        return [startDate, endDate];
    };

    const getThisMonth = () => {
        //取當月第一天
        const firstDay = new Date();
        firstDay.setDate(1); // 設置日期為當月1號
        firstDay.setHours(0, 0, 0, 0);
        const startDate = localtime(firstDay.toString());

        const currentDate = new Date();
        const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        lastDay.setHours(23, 59, 59, 999);
        const endDate = localtime(lastDay.toString());
        return [startDate, endDate];
    };

    //上個月
    const getlastMonth = () => {
        //上個月第一天
        const firstDay = new Date();
        firstDay.setMonth(firstDay.getMonth() - 1);
        firstDay.setDate(1);
        firstDay.setHours(0, 0, 0, 0);
        const startDate = localtime(firstDay.toString());
        //上個月最後一天
        const lastDay = new Date(firstDay.getFullYear(), firstDay.getMonth() + 1, 0);
        const endDate = localtime(lastDay.toString());
        return [startDate, endDate];
    };
    return {
        getToday,
        getYesterDay,
        getThisWeek,
        getLastWeek,
        getThisMonth,
        getlastMonth,
        localtime,
    };
}
