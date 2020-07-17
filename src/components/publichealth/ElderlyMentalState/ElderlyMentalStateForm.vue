<template>
  <el-form :model="form" :rules="rules" ref="elForm" size="mini" label-width="100px" class="elform">
    <el-row><el-col :span="24"><div class="el-form-item__label_group">1.时间定向力</div></el-col></el-row>
    <el-row><el-col><div class="el-form-item__label">问:今天是？</div></el-col></el-row>
    <el-row><el-col :xs="24" :sm="12" :md="8" :lg="4"><el-form-item label="哪一年" prop="time_year"><el-input v-model="form.time_year"/></el-form-item></el-col><el-col :xs="24" :sm="12" :md="8" :lg="5"><el-form-item label="季节" prop="time_season"><el-input v-model="form.time_season"/></el-form-item></el-col><el-col :xs="24" :sm="12" :md="8" :lg="5"><el-form-item label="月份" prop="time_month"><el-input v-model="form.time_month"/></el-form-item></el-col><el-col :xs="24" :sm="12" :md="8" :lg="5"><el-form-item label="日期" prop="time_date"><el-input v-model="form.time_date"/></el-form-item></el-col><el-col :xs="24" :sm="12" :md="8" :lg="5"><el-form-item label="星期几" prop="time_week"><el-input v-model="form.time_week"/></el-form-item></el-col></el-row>
    <el-row><el-col :xs="24" :sm="12" :md="8" :lg="4"><el-form-item label="得分" prop="time_score"><el-input v-model="form.time_score"/></el-form-item></el-col></el-row>
    <el-row><el-col :span="24"><div class="el-form-item__label_group">2.地点定向力</div></el-col></el-row>
    <el-row><el-col><div class="el-form-item__label">问：我们现在在哪里？</div></el-col></el-row>
    <el-row><el-col :xs="24" :sm="12" :md="8" :lg="4"><el-form-item label="国家" prop="place_nation"><el-input v-model="form.place_nation"/></el-form-item></el-col><el-col :xs="24" :sm="12" :md="8" :lg="5"><el-form-item label="城市" prop="place_city"><el-input v-model="form.place_city"/></el-form-item></el-col><el-col :xs="24" :sm="12" :md="8" :lg="5"><el-form-item label="城市的哪一部分" prop="place_city_place"><el-input v-model="form.place_city_place"/></el-form-item></el-col><el-col :xs="24" :sm="12" :md="8" :lg="5"><el-form-item label="建筑物" prop="place_building"><el-input v-model="form.place_building"/></el-form-item></el-col><el-col :xs="24" :sm="12" :md="8" :lg="5"><el-form-item label="第几层" prop="place_floor"><el-input v-model="form.place_floor"/></el-form-item></el-col></el-row>
    <el-row><el-col :xs="24" :sm="12" :md="8" :lg="4"><el-form-item label="得分" prop="place_score"><el-input v-model="form.place_score"/></el-form-item></el-col></el-row>
    <el-row><el-col :span="24"><div class="el-form-item__label_group">3.即刻回忆</div></el-col></el-row>
    <el-row><el-col><div class="el-form-item__label">记录者说三个词，病人在说完以后重复。 三个词是：球，旗子，树。</div></el-col></el-row>
    <el-row><el-col><div class="el-form-item__label">病人所重复的三个词：</div></el-col></el-row>
    <el-row><el-col :xs="24" :sm="12" :md="8" :lg="8"><el-form-item label="1" prop="recall_1"><el-input v-model="form.recall_1"/></el-form-item></el-col><el-col :xs="24" :sm="12" :md="8" :lg="8"><el-form-item label="2" prop="recall_2"><el-input v-model="form.recall_2"/></el-form-item></el-col><el-col :xs="24" :sm="12" :md="8" :lg="8"><el-form-item label="3" prop="recall_3"><el-input v-model="form.recall_3"/></el-form-item></el-col></el-row>
    <el-row><el-col :xs="24" :sm="12" :md="8" :lg="4"><el-form-item label="得分" prop="recall_score"><el-input v-model="form.recall_score"/></el-form-item></el-col></el-row>
    <el-row><el-col :span="24"><div class="el-form-item__label_group">4.注意力与计算力</div></el-col></el-row>
    <el-row><el-col><div class="el-form-item__label">问：从100减去7，顺序往下减。直至我让你停止。100减7等于？</div></el-col></el-row>
    <el-row><el-col :xs="24" :sm="12" :md="8" :lg="4"><el-form-item label="1" prop="computing_1"><el-input v-model="form.computing_1"/></el-form-item></el-col><el-col :xs="24" :sm="12" :md="8" :lg="5"><el-form-item label="2" prop="computing_2"><el-input v-model="form.computing_2"/></el-form-item></el-col><el-col :xs="24" :sm="12" :md="8" :lg="5"><el-form-item label="3" prop="computing_3"><el-input v-model="form.computing_3"/></el-form-item></el-col><el-col :xs="24" :sm="12" :md="8" :lg="5"><el-form-item label="4" prop="computing_4"><el-input v-model="form.computing_4"/></el-form-item></el-col><el-col :xs="24" :sm="12" :md="8" :lg="5"><el-form-item label="5" prop="computing_5"><el-input v-model="form.computing_5"/></el-form-item></el-col></el-row>
    <el-row><el-col :xs="24" :sm="12" :md="8" :lg="4"><el-form-item label="得分" prop="computing_score"><el-input v-model="form.computing_score"/></el-form-item></el-col></el-row>
    <el-row><el-col :span="24"><div class="el-form-item__label_group">5.回忆那三个词</div></el-col></el-row>
    <el-row><el-col><div class="el-form-item__label">问：我刚才让你记住的三个词是什么？</div></el-col></el-row>
    <el-row><el-col :xs="24" :sm="12" :md="8" :lg="8"><el-form-item label="1" prop="recall_word_1"><el-input v-model="form.recall_word_1"/></el-form-item></el-col><el-col :xs="24" :sm="12" :md="8" :lg="8"><el-form-item label="2" prop="recall_word_2"><el-input v-model="form.recall_word_2"/></el-form-item></el-col><el-col :xs="24" :sm="12" :md="8" :lg="8"><el-form-item label="3" prop="recall_word_3"><el-input v-model="form.recall_word_3"/></el-form-item></el-col></el-row>
    <el-row><el-col :xs="24" :sm="12" :md="8" :lg="4"><el-form-item label="得分" prop="recall_word_score"><el-input v-model="form.recall_word_score"/></el-form-item></el-col></el-row>
    <el-row><el-col :span="24"><div class="el-form-item__label_group">6.命名</div></el-col></el-row>
    <el-row><el-col><div class="el-form-item__label">问：这是什么？</div></el-col></el-row>
    <el-row><el-col :xs="24" :sm="12" :md="12" :lg="12"><el-form-item label="（展示铅笔）" prop="name_1"><el-input v-model="form.name_1"/></el-form-item></el-col><el-col :xs="24" :sm="12" :md="12" :lg="12"><el-form-item label="（展示手表）" prop="name_2"><el-input v-model="form.name_2"/></el-form-item></el-col></el-row>
    <el-row><el-col :xs="24" :sm="12" :md="8" :lg="4"><el-form-item label="得分" prop="name_score"><el-input v-model="form.name_score"/></el-form-item></el-col></el-row>
    <el-row><el-col :span="24"><div class="el-form-item__label_group">7.语言重置</div></el-col></el-row>
    <el-row><el-col><div class="el-form-item__label">记录者说：瑞雪兆丰年；</div></el-col></el-row>
    <el-row><el-col><el-form-item label="病人说出" prop="language_repeat"><el-input v-model="form.language_repeat"/></el-form-item></el-col></el-row>
    <el-row><el-col :xs="24" :sm="12" :md="8" :lg="4"><el-form-item label="得分" prop="language_repeat_score"><el-input v-model="form.language_repeat_score"/></el-form-item></el-col></el-row>
    <el-row><el-col :span="24"><div class="el-form-item__label_group">8.理解力</div></el-col></el-row>
    <el-row><el-col><div class="el-form-item__label">说：仔细听并按照我说的做。（一个动作一分） 左手拿着这张纸，(1分) 把它对折，(1分) 把它放在您的右腿边(1分)</div></el-col></el-row>
    <el-row><el-col :xs="24" :sm="12" :md="8" :lg="4"><el-form-item label="得分" prop="comprehension_score"><el-input v-model="form.comprehension_score"/></el-form-item></el-col></el-row>
    <el-row><el-col :span="24"><div class="el-form-item__label_group">9.阅读</div></el-col></el-row>
    <el-row><el-col><div class="el-form-item__label">说：读下面的句子，并按照做。 句子：闭上你的眼睛。</div></el-col></el-row>
    <el-row><el-col :xs="24" :sm="12" :md="8" :lg="4"><el-form-item label="得分" prop="reading_score"><el-input v-model="form.reading_score"/></el-form-item></el-col></el-row>
    <el-row><el-col :span="24"><div class="el-form-item__label_group">10.写</div></el-col></el-row>
    <el-row><el-col><div class="el-form-item__label">记录者说：写一个句子。</div></el-col></el-row>
    <el-row><el-col><el-form-item label="1" prop="writeing"><el-input v-model="form.writeing"/></el-form-item></el-col></el-row>
    <el-row><el-col :xs="24" :sm="12" :md="8" :lg="4"><el-form-item label="得分" prop="writeing_score"><el-input v-model="form.writeing_score"/></el-form-item></el-col></el-row>
    <el-row><el-col :span="24"><div class="el-form-item__label_group">11.画画</div></el-col></el-row>
    <el-row><el-col><el-form-item label="记录者说：照下图画。" prop="painting"><el-input v-model="form.painting"/></el-form-item></el-col></el-row>
    <el-row><el-col :xs="24" :sm="12" :md="8" :lg="4"><el-form-item label="得分" prop="painting_score"><el-input v-model="form.painting_score"/></el-form-item></el-col></el-row>
    <el-row><el-col :span="24"><div class="el-form-item__label_group">结果</div></el-col></el-row>
    <el-row><el-col :xs="24" :sm="12" :md="8" :lg="4"><el-form-item label="总得分" prop="assess_score"><el-input v-model="form.assess_score"/></el-form-item></el-col><el-col :xs="24" :sm="12" :md="6" :lg="6"><el-form-item label="评估结果" prop="assess_result"><el-radio v-model="form.assess_result" :label="1" border="border">痴呆</el-radio><el-radio v-model="form.assess_result" :label="2" border="border">正常</el-radio></el-form-item></el-col><el-col :xs="24" :sm="12" :md="6" :lg="6"><el-form-item label="文化程度" prop="education_name"><el-input v-model="form.education_name"/></el-form-item></el-col><el-col :xs="24" :sm="12" :md="6" :lg="6"><el-form-item label="评估时间" prop="assess_time"><div class="block"/><el-date-picker class="ud-inputdate" v-model="form.assess_time" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"/></el-form-item></el-col></el-row>
  </el-form>
</template>
<script src="./ElderlyMentalStateForm.js"></script>
<style scoped src="../../../assets/css/base-form.css"></style>
